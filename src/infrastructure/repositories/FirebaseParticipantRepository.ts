import { IParticipantRepository } from '../../application/ports/IParticipantRepository';
import { Participant } from '../../domain/entities/Participant';
import { Email } from '../../domain/valueObjects/Email';
import { Id } from '../../domain/valueObjects/Id';
import { DatabaseError } from '../../domain/errors/DomainErrors';
import { firestore } from '../services/FirebaseService';

export class FirebaseParticipantRepository implements IParticipantRepository {
  private readonly collection = 'participants';

  async add(drawId: Id, participant: Participant): Promise<void> {
    try {
      await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .doc(participant.id)
        .set(this.mapToFirestore(participant));
    } catch (error) {
      throw new DatabaseError('add', error as Error);
    }
  }

  async remove(drawId: Id, participantId: Id): Promise<void> {
    try {
      await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .doc(participantId.value)
        .delete();
    } catch (error) {
      throw new DatabaseError('remove', error as Error);
    }
  }

  async findById(drawId: Id, participantId: Id): Promise<Participant | null> {
    try {
      const doc = await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .doc(participantId.value)
        .get();

      if (!doc.exists) return null;
      return this.mapToParticipant(doc.data() as any);
    } catch (error) {
      throw new DatabaseError('findById', error as Error);
    }
  }

  async findByEmail(drawId: Id, email: Email): Promise<Participant | null> {
    try {
      const snapshot = await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .where('email', '==', email.value)
        .get();

      if (snapshot.empty) return null;
      return this.mapToParticipant(snapshot.docs[0].data());
    } catch (error) {
      throw new DatabaseError('findByEmail', error as Error);
    }
  }

  async listByDraw(drawId: Id): Promise<Participant[]> {
    try {
      const snapshot = await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .get();

      return snapshot.docs.map(doc => this.mapToParticipant(doc.data()));
    } catch (error) {
      throw new DatabaseError('listByDraw', error as Error);
    }
  }

  async emailAlreadyRegistered(drawId: Id, email: Email): Promise<boolean> {
    try {
      const participant = await this.findByEmail(drawId, email);
      return participant !== null;
    } catch (error) {
      throw new DatabaseError('emailAlreadyRegistered', error as Error);
    }
  }

  observeParticipants(drawId: Id, callback: (participants: Participant[]) => void): () => void {
    return firestore
      .collection('draws')
      .doc(drawId.value)
      .collection(this.collection)
      .onSnapshot((snapshot) => {
        const participants = snapshot.docs.map(doc => this.mapToParticipant(doc.data()));
        callback(participants);
      });
  }

  async update(drawId: Id, participant: Participant): Promise<void> {
    try {
      await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .doc(participant.id)
        .update(this.mapToFirestore(participant));
    } catch (error) {
      throw new DatabaseError('update', error as Error);
    }
  }

  async removeAll(drawId: Id): Promise<void> {
    try {
      const batch = firestore.batch();
      const snapshot = await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .get();

      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });

      await batch.commit();
    } catch (error) {
      throw new DatabaseError('removeAll', error as Error);
    }
  }

  async countParticipants(drawId: Id): Promise<number> {
    try {
      const snapshot = await firestore
        .collection('draws')
        .doc(drawId.value)
        .collection(this.collection)
        .get();

      return snapshot.size;
    } catch (error) {
      throw new DatabaseError('countParticipants', error as Error);
    }
  }

  private mapToFirestore(participant: Participant): any {
    return {
      id: participant.id,
      name: participant.name,
      email: participant.email
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