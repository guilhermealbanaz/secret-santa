import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { IDrawRepository } from '../../ports/IDrawRepository';
import { Participant } from '../../../domain/entities/Participant';
import { Email } from '../../../domain/valueObjects/Email';
import { Name } from '../../../domain/valueObjects/Name';
import { Id } from '../../../domain/valueObjects/Id';

export class AddParticipantUseCase {
  constructor(
    private participantRepository: IParticipantRepository,
    private drawRepository: IDrawRepository
  ) {}

  async execute(drawId: string, name: string, email: string): Promise<void> {
    const idDraw = new Id(drawId);
    
    const draw = await this.drawRepository.findById(idDraw);
    if (!draw) {
      throw new Error('Draw not found');
    }
    if (draw.performed) {
      throw new Error('Cannot add participants after the draw has been performed');
    }

    const emailVO = new Email(email);
    const nameVO = new Name(name);

    const emailExists = await this.participantRepository.emailAlreadyRegistered(idDraw, emailVO);
    if (emailExists) {
      throw new Error('Email already registered');
    }

    const participant = new Participant(new Id().value, nameVO.value, emailVO.value);
    await this.participantRepository.add(idDraw, participant);
  }
} 