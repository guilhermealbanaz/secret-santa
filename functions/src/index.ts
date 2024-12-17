import { initializeApp } from 'firebase-admin/app';
import { setGlobalOptions } from 'firebase-functions/v2';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from '@sendinblue/client';

initializeApp();

setGlobalOptions({
  region: 'us-central1',
  memory: '256MiB',
  minInstances: 0,
  maxInstances: 100,
  timeoutSeconds: 60,
});

const apiInstance = new TransactionalEmailsApi();
const brevoConfig = process.env.BREVO_API_KEY || '';
const apiKey = brevoConfig || '';
apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

export const sendVerificationCode = onCall(
  {
    enforceAppCheck: false,
    cors: ['https://ahorademudar.com.br', 'http://localhost:5173'],
    timeoutSeconds: 60,
    memory: '256MiB',
    minInstances: 0,
    maxInstances: 100,
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
        throw new HttpsError('not-found', 'Email não encontrado no sorteio');
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
      </div>
    `;
        sendSmtpEmail.sender = {
          name: 'Amigo Secreto',
          email: 'gui11bragatoalbanaz@gmail.com',
        };
        sendSmtpEmail.to = [{ email }];

        await apiInstance.sendTransacEmail(sendSmtpEmail);
        return { success: true };
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        await db.collection('verificationCodes').doc(`${drawId}_${email}`).delete();
        throw new HttpsError('internal', 'Erro ao enviar email de verificação');
      }
    } catch (error) {
      console.error('Error in verification process:', error);
      throw new HttpsError('internal', 'Error sending verification code');
    }
  }
);

export const verifyCode = onCall(
  {
    enforceAppCheck: false,
    cors: ['https://ahorademudar.com.br', 'http://localhost:5173'],
    timeoutSeconds: 60,
    memory: '256MiB',
    minInstances: 0,
    maxInstances: 100,
  },
  async (request) => {
    const { data } = request;
    const { drawId, email, code } = data;

    if (!drawId || !email || !code) {
      throw new HttpsError('invalid-argument', 'Missing required fields');
    }

    const db = getFirestore();

    try {
      const docRef = db.collection('verificationCodes').doc(`${drawId}_${email}`);
      const doc = await docRef.get();

      if (!doc.exists) {
        throw new HttpsError('not-found', 'Código de verificação não encontrado');
      }

      const docData = doc.data()!;

      // Verificar se o código expirou
      if (docData.expiresAt.toDate() < new Date()) {
        await docRef.delete();
        throw new HttpsError('failed-precondition', 'Código de verificação expirado');
      }

      // Verificar número de tentativas
      if (docData.attempts >= 3) {
        await docRef.delete();
        throw new HttpsError(
          'failed-precondition',
          'Número máximo de tentativas excedido. Solicite um novo código.'
        );
      }

      // Incrementar tentativas
      await docRef.update({
        attempts: FieldValue.increment(1),
        lastAttempt: FieldValue.serverTimestamp(),
      });

      // Verificar código
      if (docData.code !== code) {
        throw new HttpsError('invalid-argument', 'Código inválido');
      }

      // Código válido - deletar documento
      await docRef.delete();

      // Registrar verificação bem-sucedida
      await db.collection('verificationLogs').add({
        drawId,
        email,
        verifiedAt: FieldValue.serverTimestamp(),
        success: true,
      });

      return { verified: true };
    } catch (error: any) {
      // Registrar falha na verificação
      await db.collection('verificationLogs').add({
        drawId,
        email,
        verifiedAt: FieldValue.serverTimestamp(),
        success: false,
        error: error?.message || 'Unknown error',
      });

      console.error('Error verifying code:', error);
      throw new HttpsError('internal', 'Error verifying code');
    }
  }
);
