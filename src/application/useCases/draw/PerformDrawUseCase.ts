import { IDrawRepository } from '../../ports/IDrawRepository';
import { Password } from '../../../domain/valueObjects/Password';
import { DrawNotFoundError, InsufficientParticipantsError } from '../../../domain/errors/DomainErrors';

export class PerformDrawUseCase {
  constructor(private readonly drawRepository: IDrawRepository) {}

  async execute(drawId: string, password: string): Promise<void> {
    const draw = await this.drawRepository.findById(drawId);
    
    if (!draw) {
      throw new DrawNotFoundError(drawId);
    }

    if (draw.participants.length < 4) {
      throw new InsufficientParticipantsError();
    }

    const passwordVO = new Password(password);
    const updatedDraw = draw.performDraw().setPassword(passwordVO);
    
    await this.drawRepository.update(updatedDraw);
  }
} 