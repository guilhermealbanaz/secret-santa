import { IDrawRepository } from '../../ports/IDrawRepository';
import { Id } from '../../../domain/valueObjects/Id';
import { Name } from '../../../domain/valueObjects/Name';

export class ConfigureDrawUseCase {
  constructor(private drawRepository: IDrawRepository) {}

  async execute(drawId: string, name: string): Promise<void> {
    const idDraw = new Id(drawId);
    const nameVO = new Name(name);

    const draw = await this.drawRepository.findById(idDraw);
    if (!draw) {
      throw new Error('Draw not found');
    }
    if (draw.performed) {
      throw new Error('Cannot configure a draw that has already been performed');
    }

    draw.setName(nameVO);
    await this.drawRepository.update(draw);
  }
} 