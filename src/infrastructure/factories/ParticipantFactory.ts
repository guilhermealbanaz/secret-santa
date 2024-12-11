import { AddParticipantUseCase } from '../../application/useCases/participant/AddParticipantUseCase';
import { RemoveParticipantUseCase } from '../../application/useCases/participant/RemoveParticipantUseCase';
import { FirebaseDrawRepository } from '../repositories/FirebaseDrawRepository';
import { FirebaseParticipantRepository } from '../repositories/FirebaseParticipantRepository';

export class ParticipantFactory {
  static createRepository() {
    return new FirebaseParticipantRepository();
  }

  static createDrawRepository() {
    return new FirebaseDrawRepository();
  }

  static createAddUseCase() {
    const repository = this.createRepository();
    const drawRepository = this.createDrawRepository();
    return new AddParticipantUseCase(repository, drawRepository);
  }

  static createRemoveUseCase() {
    const repository = this.createRepository();
    const drawRepository = this.createDrawRepository();
    return new RemoveParticipantUseCase(repository, drawRepository);
  }
} 