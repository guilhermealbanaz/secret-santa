import { initializeFirebase } from '../config/firebase';

const { app, firestore } = initializeFirebase();

// Mantemos a exportação direta para compatibilidade
export { app, firestore };

// Adicionamos o getter para uso futuro
export function getFirebaseServices() {
  return { app, firestore };
}