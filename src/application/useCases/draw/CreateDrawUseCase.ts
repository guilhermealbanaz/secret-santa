import { Draw } from '../../../domain/entities/Draw';
import { IDrawRepository } from '../../ports/IDrawRepository';

export class CreateDrawUseCase {
  constructor(private drawRepository: IDrawRepository) {}

  async execute(name: string, password: string): Promise<string> {
    const id = this.generateId();
    const draw = new Draw(id, name, password);
    
    await this.drawRepository.create(draw);
    
    return id;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
} 