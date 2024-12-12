import { DomainError, ValidationError } from './DomainErrors';

export function formatErrorMessage(error: Error): string {
  if (error instanceof ValidationError) {
    return `Erro de validação: ${error.message}`;
  }
  
  if (error instanceof DomainError) {
    return error.message;
  }
  
  return 'Ocorreu um erro inesperado. Por favor, tente novamente.';
} 