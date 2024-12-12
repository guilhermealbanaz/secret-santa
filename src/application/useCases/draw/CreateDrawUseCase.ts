import { IDrawRepository } from '../../ports/IDrawRepository';
import { Draw } from '../../../domain/entities/Draw';
import { Id } from '../../../domain/valueObjects/Id';

export class CreateDrawUseCase {
  constructor(private readonly drawRepository: IDrawRepository) {}

  async execute(): Promise<string> {
    const id = new Id().value;
    const draw = new Draw(id, '', '', [], {}, false);
    await this.drawRepository.update(draw);
    return id;
  }
} 