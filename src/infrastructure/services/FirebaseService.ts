import { initializeFirebase } from '../config/firebase';

const { app, firestore } = initializeFirebase();

export { app, firestore };