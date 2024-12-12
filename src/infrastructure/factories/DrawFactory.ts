import { DrawService } from '../../application/services/DrawService';
import { IDrawRepository } from '../../application/ports/IDrawRepository';
import { FirebaseDrawRepository } from '../repositories/FirebaseDrawRepository';
import { ConfigureDrawUseCase } from '../../application/useCases/draw/ConfigureDrawUseCase';
import { CreateDrawUseCase } from '../../application/useCases/draw/CreateDrawUseCase';
import { PerformDrawUseCase } from '../../application/useCases/draw/PerformDrawUseCase';
import { ViewResultUseCase } from '../../application/useCases/draw/ViewResultUseCase';

export class DrawFactory {
  static createService(): DrawService {
    return new DrawService();
  }

  static createRepository(): IDrawRepository {
    return new FirebaseDrawRepository();
  }

  static async createUseCases() {
    const repository = this.createRepository();
    const service = this.createService();

    return {
      configure: new ConfigureDrawUseCase(repository),
      create: new CreateDrawUseCase(repository),
      perform: new PerformDrawUseCase(repository, service),
      viewResult: new ViewResultUseCase(repository)
    };
  }
} 