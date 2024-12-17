import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app, 'us-central1');

// Conectar ao emulador local se estiver em desenvolvimento
if (import.meta.env.DEV) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

// Configurar as funções com opções específicas
export const sendVerificationCodeFunction = httpsCallable(functions, 'sendVerificationCode', {
  timeout: 60000 // 60 segundos
});

export const verifyCodeFunction = httpsCallable(functions, 'verifyCode', {
  timeout: 60000 // 60 segundos
}); 