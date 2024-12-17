import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from '@sendinblue/client';
import * as functions from 'firebase-functions';

interface VerificationData {
  drawId: string;
  email: string;
}

const apiInstance = new TransactionalEmailsApi();
const brevoConfig = functions.config().brevo || {};
const apiKey = brevoConfig.api_key || '';
apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

export const sendVerificationCode = onCall<VerificationData>(
  {
    cors: ['*'],
    maxInstances: 10,
  },
  async (request) => {
    const { data } = request;
    const { drawId, email } = data;

    if (!drawId || !email) {
      throw new HttpsError('invalid-argument', 'Missing required fields');
    }

    if (!apiKey) {
      console.error('Brevo API key not configured');
      throw new HttpsError('failed-precondition', 'Email service not configured');
    }

    try {
      const db = getFirestore();

      // Verificar se o email existe no sorteio
      const drawRef = await db.collection('draws').doc(drawId).get();
      const draw = drawRef.data();

      if (!draw || !draw.participants.some((p: any) => p.email === email)) {
        throw new HttpsError('permission-denied', 'Email não encontrado no sorteio');
      }

      // Gerar código de 6 dígitos
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Salvar o código no Firestore com TTL de 10 minutos
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

      await db.collection('verificationCodes').doc(`${drawId}_${email}`).set({
        code: verificationCode,
        expiresAt,
        attempts: 0,
        createdAt: new Date(),
      });

      try {
        // Enviar email via Brevo
        const sendSmtpEmail = new SendSmtpEmail();
        sendSmtpEmail.subject = 'Código de Verificação - Amigo Secreto';
        sendSmtpEmail.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2B3674; text-align: center;">Seu código de verificação</h1>
      <p style="color: #4F5B7D; font-size: 16px; line-height: 1.5;">
        Use o código abaixo para revelar seu amigo secreto:
      </p>
      <div style="background-color: #F4F7FE; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
        <h2 style="color: #4A90E2; font-size: 32px; letter-spacing: 5px; margin: 0;">
          ${verificationCode}
        </h2>
      </div>
      <p style="color: #4F5B7D; font-size: 14px; text-align: center;">
        Este código expira em 10 minutos.
      </p>
      <div style="border-top: 1px solid #E2E8F0; margin-top: 20px; padding-top: 20px;">
        <p style="color: #718096; font-size: 12px; text-align: center;">
          Se você não solicitou este código, por favor ignore este email.
        </p>
      </div>
    </div>
  `;
        sendSmtpEmail.sender = {
          name: 'Amigo Secreto',
          email: 'gui11bragatoalbanaz@gmail.com',
        };
        sendSmtpEmail.to = [{ email }];

        await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Deletar o código se o email falhar
        await db.collection('verificationCodes').doc(`${drawId}_${email}`).delete();
        throw new HttpsError('internal', 'Erro ao enviar email de verificação');
      }

      return { success: true };
    } catch (error) {
      console.error('Error in verification process:', error);
      throw new HttpsError(
        'internal',
        error instanceof HttpsError ? error.message : 'Error sending verification code'
      );
    }
  }
);
