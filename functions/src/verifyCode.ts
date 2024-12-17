import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

interface VerifyCodeData {
  drawId: string;
  email: string;
  code: string;
}

export const verifyCode = onCall<VerifyCodeData>(
  {
    cors: [
      'https://ahorademudar.com.br',
      'https://www.ahorademudar.com.br',
      'http://localhost:3000',
      'http://localhost:5173',
    ],
    maxInstances: 10,
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
        throw new HttpsError('deadline-exceeded', 'Código de verificação expirado');
      }

      // Verificar número de tentativas
      if (docData.attempts >= 3) {
        await docRef.delete();
        throw new HttpsError(
          'permission-denied',
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
        throw new HttpsError('permission-denied', 'Código inválido');
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
