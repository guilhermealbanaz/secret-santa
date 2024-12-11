import { IDrawRepository } from '../../application/ports/IDrawRepository';
import { Draw } from '../../domain/entities/Draw';
import { DatabaseError } from '../../domain/errors/DomainErrors';
import { firestore } from '../services/FirebaseService';
import { 
  doc, 
  updateDoc, 
  setDoc, 
  getDoc, 
  onSnapshot 
} from 'firebase/firestore';

export class FirebaseDrawRepository implements IDrawRepository {
  private readonly collection = 'draws';

  async getById(id: string): Promise<Draw | null> {
    try {
      const docRef = doc(firestore, this.collection, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return Draw.fromJSON({ id: docSnap.id, ...docSnap.data() });
      }
      
      return null;
    } catch (error) {
      throw new DatabaseError('getById', error as Error);
    }
  }

  async update(draw: Draw): Promise<void> {
    try {
      const drawRef = doc(firestore, this.collection, draw.id);
      await setDoc(drawRef, draw.toJSON(), { merge: true });
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      throw new DatabaseError('update', error as Error);
    }
  }

  observe(drawId: string, onUpdate: (draw: Draw) => void): () => void {
    try {
      const drawRef = doc(firestore, this.collection, drawId);
      
      return onSnapshot(drawRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const draw = Draw.fromJSON({ id: snapshot.id, ...data });
          onUpdate(draw);
        }
      });
    } catch (error) {
      console.error('Erro ao observar:', error);
      throw new DatabaseError('observe', error as Error);
    }
  }
} 