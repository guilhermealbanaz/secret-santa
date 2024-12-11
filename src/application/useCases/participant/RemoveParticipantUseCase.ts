import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { IDrawRepository } from '../../ports/IDrawRepository';
import { Id } from '../../../domain/valueObjects/Id';

export class RemoveParticipantUseCase {
  constructor(
    private participantRepository: IParticipantRepository,
    private drawRepository: IDrawRepository
  ) {}

  async execute(drawId: string, participantId: string): Promise<void> {
    const idDraw = new Id(drawId);
    const idParticipant = new Id(participantId);

    const draw = await this.drawRepository.findById(idDraw);
    if (!draw) {
      throw new Error('Draw not found');
    }
    if (draw.performed) {
      throw new Error('Cannot remove participants after the draw has been performed');
    }

    await this.participantRepository.remove(idDraw, idParticipant);
  }
} 