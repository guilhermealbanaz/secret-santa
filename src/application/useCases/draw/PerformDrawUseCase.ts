import { IDrawRepository } from '../../ports/IDrawRepository';
import { IParticipantRepository } from '../../ports/IParticipantRepository';
import { Id } from '../../../domain/valueObjects/Id';
import { Password } from '../../../domain/valueObjects/Password';

export class PerformDrawUseCase {
  constructor(
    private drawRepository: IDrawRepository,
    private participantRepository: IParticipantRepository
  ) {}

  async execute(drawId: string, password: string): Promise<void> {
    const idDraw = new Id(drawId);
    const passwordVO = new Password(password);

    const draw = await this.drawRepository.findById(idDraw);
    if (!draw) {
      throw new Error('Draw not found');
    }
    if (draw.performed) {
      throw new Error('Draw already performed');
    }

    const participants = await this.participantRepository.listByDraw(idDraw);
    if (participants.length < 3) {
      throw new Error('Minimum of 3 participants required to perform the draw');
    }

    draw.performDraw();
    draw.setPassword(passwordVO);
    
    await this.drawRepository.update(draw);
  }
} 