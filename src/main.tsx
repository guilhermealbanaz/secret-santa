import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './presentation/routes';
import './index.css';

// Inicialização do Firebase
const initFirebase = async () => {
  try {
    const { getFirebaseServices } = await import('./infrastructure/services/FirebaseService');
    return getFirebaseServices();
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error; // Re-throw para tratamento adequado
  }
};

// IIFE para inicializar o Firebase e renderizar a aplicação
(async () => {
  try {
    await initFirebase();
    
    const root = document.getElementById('root');
    if (root) {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <AppRoutes />
        </React.StrictMode>
      );
    }
  } catch (error) {
    console.error('Failed to initialize application:', error);
    // Aqui você pode renderizar um componente de erro se necessário
  }
})();
