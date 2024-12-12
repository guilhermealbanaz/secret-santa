export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class DrawError extends DomainError {
  constructor(operation: string, error?: Error) {
    super(error?.message || `Error in draw operation: ${operation}`);
  }
}

export class DrawAlreadyPerformedError extends DrawError {
  constructor() {
    super('Draw has already been performed');
  }
}

export class DrawNotPerformedError extends DrawError {
  constructor() {
    super('Draw has not been performed yet');
  }
}

export class InsufficientParticipantsError extends DrawError {
  constructor() {
    super('Minimum of 3 participants required to perform the draw');
  }
}

export class DrawNotFoundError extends DrawError {
  constructor(id: string) {
    super(`Draw with ID ${id} not found`);
  }
}

export class ParticipantError extends DomainError {
  constructor(operation: string, error?: Error) {
    super(error?.message || `Error in participant operation: ${operation}`);
  }
}

export class ParticipantAlreadyExistsError extends ParticipantError {
  constructor(email: string) {
    super(`A participant with email ${email} already exists`);
  }
}

export class ParticipantNotFoundError extends ParticipantError {
  constructor(id: string) {
    super(`Participant with ID ${id} not found`);
  }
}

export class ValidationError extends DomainError {
  constructor(message: string) {
    super(`Validation error: ${message}`);
  }
}

export class InvalidEmailError extends ValidationError {
  constructor(email: string) {
    super(`Invalid email: ${email}`);
  }
}

export class InvalidNameError extends ValidationError {
  constructor(name: string) {
    super(`Invalid name: ${name}`);
  }
}

export class InvalidPasswordError extends ValidationError {
  constructor() {
    super('Invalid password or does not match draw password');
  }
}

export class ResultError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export class ResultNotFoundError extends ResultError {
  constructor() {
    super('Result not found for this participant');
  }
}

export class SelfDrawError extends ResultError {
  constructor() {
    super('A participant cannot draw themselves');
  }
}

export class InfrastructureError extends DomainError {
  constructor(message: string) {
    super(`Infrastructure error: ${message}`);
  }
}

export class DatabaseError extends DomainError {
  constructor(operation: string, error: Error) {
    super(`Database error in operation ${operation}: ${error.message}`);
  }
}

export class AuthorizationError extends DomainError {
  constructor(message: string) {
    super(`Authorization error: ${message}`);
  }
}

export class AccessDeniedError extends AuthorizationError {
  constructor() {
    super('Access denied');
  }
}

export const isDomainError = (error: Error): error is DomainError => {
  return error instanceof DomainError;
}; 