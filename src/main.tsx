import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './presentation/routes';
import './index.css';

// Script para lidar com rotas no GitHub Pages
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, '',
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location));

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
