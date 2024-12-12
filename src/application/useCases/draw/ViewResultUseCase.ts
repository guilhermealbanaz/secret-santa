import { IDrawRepository } from '../../ports/IDrawRepository';
import { Password } from '../../../domain/valueObjects/Password';
import { 
  DrawNotFoundError, 
  DrawNotPerformedError,
  InvalidPasswordError,
  ParticipantNotFoundError 
} from '../../../domain/errors/DomainErrors';
import { Participant } from '../../../domain/entities/Participant';

export class ViewResultUseCase {
  constructor(private readonly drawRepository: IDrawRepository) {}

  async execute(
    drawId: string, 
    participantId: string, 
    password: string
  ): Promise<{ participant: Participant; secretFriend: Participant }> {
    const draw = await this.drawRepository.findById(drawId);
    
    if (!draw) {
      throw new DrawNotFoundError(drawId);
    }

    if (!draw.performed) {
      throw new DrawNotPerformedError();
    }

    const passwordVO = new Password(password);
    if (!draw.checkPassword(passwordVO)) {
      throw new InvalidPasswordError();
    }

    const participant = draw.participants.find(p => p.id === participantId);
    if (!participant) {
      throw new ParticipantNotFoundError(participantId);
    }

    const secretFriend = draw.findSecretFriend(participant);
    if (!secretFriend) {
      throw new ParticipantNotFoundError('secret friend');
    }

    return { participant, secretFriend };
  }
} 