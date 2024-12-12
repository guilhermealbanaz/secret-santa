import { IDrawRepository } from '../../ports/IDrawRepository';
import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { Participant } from '../../../domain/entities/Participant';
import { DrawNotFoundError } from '../../../domain/errors/DomainErrors';

export class AddParticipantUseCase {
  constructor(
    private readonly participantRepository: IParticipantRepository,
    private readonly drawRepository: IDrawRepository
  ) {}

  async execute(drawId: string, name: string, email: string): Promise<void> {
    const draw = await this.drawRepository.findById(drawId);
    
    if (!draw) {
      throw new DrawNotFoundError(drawId);
    }

    const participant = Participant.create(name, email);
    await this.participantRepository.add(drawId, participant);
  }
} 