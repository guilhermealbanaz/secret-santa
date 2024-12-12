import { IDrawRepository } from '../../ports/IDrawRepository';
import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { DrawNotFoundError } from '../../../domain/errors/DomainErrors';

export class RemoveParticipantUseCase {
  constructor(
    private readonly participantRepository: IParticipantRepository,
    private readonly drawRepository: IDrawRepository
  ) {}

  async execute(drawId: string, participantId: string): Promise<void> {
    const draw = await this.drawRepository.findById(drawId);
    
    if (!draw) {
      throw new DrawNotFoundError(drawId);
    }

    await this.participantRepository.remove(drawId, participantId);
  }
} 