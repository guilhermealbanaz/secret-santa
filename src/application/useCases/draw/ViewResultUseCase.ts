import { IDrawRepository } from '../../ports/IDrawRepository';
import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { Id } from '../../../domain/valueObjects/Id';
import { Password } from '../../../domain/valueObjects/Password';
import { Participant } from '../../../domain/entities/Participant';

export interface DrawResult {
  participant: Participant;
  secretFriend: Participant;
}

export class ViewResultUseCase {
  constructor(
    private drawRepository: IDrawRepository,
    private participantRepository: IParticipantRepository
  ) {}

  async execute(drawId: string, participantId: string, password: string): Promise<DrawResult> {
    const idDraw = new Id(drawId);
    const idParticipant = new Id(participantId);
    const passwordVO = new Password(password);

    const draw = await this.drawRepository.findById(idDraw);
    if (!draw) {
      throw new Error('Draw not found');
    }
    if (!draw.performed) {
      throw new Error('Draw has not been performed yet');
    }
    if (!draw.checkPassword(passwordVO)) {
      throw new Error('Incorrect password');
    }

    const participant = await this.participantRepository.findById(idDraw, idParticipant);
    if (!participant) {
      throw new Error('Participant not found');
    }

    const secretFriend = draw.findSecretFriend(participant);
    if (!secretFriend) {
      throw new Error('Secret friend not found');
    }

    return {
      participant,
      secretFriend
    };
  }
} 