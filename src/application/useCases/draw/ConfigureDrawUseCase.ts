import { IDrawRepository } from '../../ports/IDrawRepository';
import { Name } from '../../../domain/valueObjects/Name';
import { DrawNotFoundError } from '../../../domain/errors/DomainErrors';

export class ConfigureDrawUseCase {
  constructor(private readonly drawRepository: IDrawRepository) {}

  async execute(drawId: string, name: string): Promise<void> {
    const draw = await this.drawRepository.findById(drawId);
    
    if (!draw) {
      throw new DrawNotFoundError(drawId);
    }

    const nameVO = new Name(name);
    const updatedDraw = draw.setName(nameVO);
    
    await this.drawRepository.update(updatedDraw);
  }
} 