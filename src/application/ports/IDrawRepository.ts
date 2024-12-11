import { Draw } from '../../domain/entities/Draw';

export interface IDrawRepository {
  getById(id: string): Promise<Draw | null>;
  update(draw: Draw): Promise<void>;
  observe(drawId: string, onUpdate: (draw: Draw) => void): () => void;
} 