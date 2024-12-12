import { IParticipantRepository } from '../../application/ports/IParticipantRepository';
import { Participant } from '../../domain/entities/Participant';
import { DatabaseError } from '../../domain/errors/DomainErrors';
import { firestore } from '../services/FirebaseService';
import { 
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  writeBatch
} from 'firebase/firestore';

export class FirebaseParticipantRepository implements IParticipantRepository {
  private readonly collection = 'participants';

  async add(drawId: string, participant: Participant): Promise<void> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantRef = doc(collection(drawRef, this.collection), participant.id);
      const participantData = {
        id: participant.id,
        name: participant.name,
        email: participant.email,
        createdAt: new Date().toISOString()
      };
      
      await setDoc(participantRef, participantData);
    } catch (error) {
      console.error('Error adding participant:', error);
      throw new DatabaseError('add', error as Error);
    }
  }

  async remove(drawId: string, participantId: string): Promise<void> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantRef = doc(collection(drawRef, this.collection), participantId);
      await deleteDoc(participantRef);
    } catch (error) {
      throw new DatabaseError('remove', error as Error);
    }
  }

  async findById(drawId: string, participantId: string): Promise<Participant | null> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantRef = doc(collection(drawRef, this.collection), participantId);
      const docSnap = await getDoc(participantRef);

      if (!docSnap.exists()) return null;
      return this.mapToParticipant(docSnap.data());
    } catch (error) {
      throw new DatabaseError('findById', error as Error);
    }
  }

  async findByEmail(drawId: string, email: string): Promise<Participant | null> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantsRef = collection(drawRef, this.collection);
      const q = query(participantsRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) return null;
      return this.mapToParticipant(querySnapshot.docs[0].data());
    } catch (error) {
      throw new DatabaseError('findByEmail', error as Error);
    }
  }

  async listByDraw(drawId: string): Promise<Participant[]> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantsRef = collection(drawRef, this.collection);
      const querySnapshot = await getDocs(participantsRef);

      return querySnapshot.docs.map(doc => this.mapToParticipant(doc.data()));
    } catch (error) {
      throw new DatabaseError('listByDraw', error as Error);
    }
  }

  observeParticipants(drawId: string, callback: (participants: Participant[]) => void): () => void {
    const drawRef = doc(firestore, 'draws', drawId);
    const participantsRef = collection(drawRef, this.collection);

    return onSnapshot(participantsRef, (snapshot) => {
      const participants = snapshot.docs.map(doc => this.mapToParticipant(doc.data()));
      callback(participants);
    });
  }

  async update(drawId: string, participant: Participant): Promise<void> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantRef = doc(collection(drawRef, this.collection), participant.id);
      await setDoc(participantRef, this.mapToFirestore(participant), { merge: true });
    } catch (error) {
      throw new DatabaseError('update', error as Error);
    }
  }

  async removeAll(drawId: string): Promise<void> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantsRef = collection(drawRef, this.collection);
      const querySnapshot = await getDocs(participantsRef);
      const batch = writeBatch(firestore);

      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });

      await batch.commit();
    } catch (error) {
      throw new DatabaseError('removeAll', error as Error);
    }
  }

  async countParticipants(drawId: string): Promise<number> {
    try {
      const drawRef = doc(firestore, 'draws', drawId);
      const participantsRef = collection(drawRef, this.collection);
      const querySnapshot = await getDocs(participantsRef);

      return querySnapshot.size;
    } catch (error) {
      throw new DatabaseError('countParticipants', error as Error);
    }
  }

  private mapToFirestore(participant: Participant): any {
    return {
      id: participant.id,
      name: participant.name,
      email: participant.email,
      _type: 'participant'
    };
  }

  private mapToParticipant(data: any): Participant {
    return new Participant(
      data.id,
      data.name,
      data.email
    );
  }
} 