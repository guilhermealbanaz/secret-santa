import { Participant } from '../../domain/entities/Participant';
import { Email } from '../../domain/valueObjects/Email';
import { Id } from '../../domain/valueObjects/Id';

export interface IParticipantRepository {
  add(drawId: Id, participant: Participant): Promise<void>;
  remove(drawId: Id, participantId: Id): Promise<void>;
  findById(drawId: Id, participantId: Id): Promise<Participant | null>;
  findByEmail(drawId: Id, email: Email): Promise<Participant | null>;
  listByDraw(drawId: Id): Promise<Participant[]>;
  emailAlreadyRegistered(drawId: Id, email: Email): Promise<boolean>;
  observeParticipants(
    drawId: Id,
    callback: (participants: Participant[]) => void
  ): () => void;
  update(drawId: Id, participant: Participant): Promise<void>;
  removeAll(drawId: Id): Promise<void>;
  countParticipants(drawId: Id): Promise<number>;
} 