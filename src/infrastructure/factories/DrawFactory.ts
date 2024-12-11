import { DrawService } from '../../application/services/DrawService';
import { IDrawRepository } from '../../application/ports/IDrawRepository';
import { FirebaseDrawRepository } from '../repositories/FirebaseDrawRepository';

export class DrawFactory {
  static createService(): DrawService {
    return new DrawService();
  }

  static createRepository(): IDrawRepository {
    return new FirebaseDrawRepository();
  }
} 