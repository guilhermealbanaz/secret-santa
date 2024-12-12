import { Participant } from '../../domain/entities/Participant';

export interface IParticipantRepository {
  add(drawId: string, participant: Participant): Promise<void>;
  remove(drawId: string, participantId: string): Promise<void>;
  findById(drawId: string, participantId: string): Promise<Participant | null>;
  findByEmail(drawId: string, email: string): Promise<Participant | null>;
  listByDraw(drawId: string): Promise<Participant[]>;
  observeParticipants(drawId: string, callback: (participants: Participant[]) => void): () => void;
  update(drawId: string, participant: Participant): Promise<void>;
  removeAll(drawId: string): Promise<void>;
  countParticipants(drawId: string): Promise<number>;
} 