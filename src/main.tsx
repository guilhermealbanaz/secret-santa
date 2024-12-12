import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './presentation/routes';
import './index.css';

// Inicialização do Firebase
const initFirebase = async () => {
  try {
    const { initializeFirebase } = await import('./infrastructure/config/firebase');
    return initializeFirebase();
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
};

// IIFE para inicializar o Firebase e renderizar a aplicação
(async () => {
  await initFirebase();
  
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    );
  }
})();
