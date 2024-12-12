import { Draw } from '../../domain/entities/Draw';

export interface IDrawRepository {
  findById(id: string): Promise<Draw | null>;
  update(draw: Draw): Promise<void>;
  observe(drawId: string, onUpdate: (draw: Draw) => void): () => void;
} 