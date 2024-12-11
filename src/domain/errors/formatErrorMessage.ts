import { 
  DomainError,
  SorteioError,
  ParticipanteError,
  ValidationError,
  ResultadoError,
  AuthorizationError,
  InfrastructureError
} from './DomainErrors';

interface ErrorMessages {
  [key: string]: string;
}

const errorMessages: ErrorMessages = {
  // Erros de Sorteio
  'SorteioJaRealizadoError': 'O sorteio já foi realizado',
  'SorteioNaoRealizadoError': 'O sorteio ainda não foi realizado',
  'ParticipantesInsuficientesError': 'É necessário ter pelo menos 3 participantes para realizar o sorteio',
  'SorteioNaoEncontradoError': 'Sorteio não encontrado',
  
  // Erros de Participante
  'ParticipanteJaExisteError': 'Este participante já está registrado',
  'ParticipanteNaoEncontradoError': 'Participante não encontrado',
  
  // Erros de Validação
  'EmailInvalidoError': 'O email informado é inválido',
  'NomeInvalidoError': 'O nome informado é inválido',
  'SenhaInvalidaError': 'A senha informada é inválida',
  
  // Erros de Resultado
  'ResultadoNaoEncontradoError': 'Resultado não encontrado',
  'AutoSorteioError': 'Um participante não pode tirar a si mesmo no sorteio',
  
  // Erros de Autorização
  'AcessoNegadoError': 'Acesso negado',
  
  // Erros de Infraestrutura
  'DatabaseError': 'Erro ao acessar o banco de dados',
  
  // Erros de Sorteio
  'DrawAlreadyPerformedError': 'The draw has already been performed',
  'DrawNotPerformedError': 'The draw has not been performed yet',
  'InsufficientParticipantsError': 'At least 3 participants are required to perform the draw',
  'DrawNotFoundError': 'Draw not found',
  'ParticipantAlreadyExistsError': 'This participant is already registered',
  'ParticipantNotFoundError': 'Participant not found',
  'InvalidEmailError': 'The provided email is invalid',
  'InvalidNameError': 'The provided name is invalid',
  'InvalidPasswordError': 'The provided password is invalid',
  'ResultNotFoundError': 'Result not found',
  'SelfDrawError': 'A participant cannot draw themselves',
  'AccessDeniedError': 'Access denied'
};

export const formatErrorMessage = (error: Error): string => {
  // Se for um erro do domínio, retorna a mensagem específica
  if (error instanceof DomainError) {
    const errorName = error.constructor.name;
    return errorMessages[errorName] || error.message;
  }

  // Categoriza o erro baseado no tipo
  if (error instanceof SorteioError) {
    return 'Erro no sorteio: ' + error.message;
  }
  if (error instanceof ParticipanteError) {
    return 'Erro com participante: ' + error.message;
  }
  if (error instanceof ValidationError) {
    return 'Erro de validação: ' + error.message;
  }
  if (error instanceof ResultadoError) {
    return 'Erro no resultado: ' + error.message;
  }
  if (error instanceof AuthorizationError) {
    return 'Erro de autorização: ' + error.message;
  }
  if (error instanceof InfrastructureError) {
    return 'Erro de sistema: ' + error.message;
  }

  // Para erros desconhecidos ou não tratados
  if (process.env.NODE_ENV === 'development') {
    console.error('Erro não tratado:', error);
    return `Erro não tratado: ${error.message}`;
  }

  // Mensagem genérica para produção
  return 'Ocorreu um erro inesperado. Por favor, tente novamente.';
};

// Helper para traduzir mensagens de erro do Firebase
export const translateFirebaseError = (error: Error): string => {
  const firebaseErrors: ErrorMessages = {
    'auth/invalid-email': 'Email inválido',
    'auth/user-disabled': 'Usuário desativado',
    'auth/user-not-found': 'Usuário não encontrado',
    'auth/wrong-password': 'Senha incorreta',
    'auth/email-already-in-use': 'Email já está em uso',
    'auth/operation-not-allowed': 'Operação não permitida',
    'auth/weak-password': 'Senha muito fraca',
    // Adicione mais códigos de erro do Firebase conforme necessário
  };

  const errorCode = (error as any).code;
  return firebaseErrors[errorCode] || error.message;
};

// Helper para formatar erros de validação
export const formatValidationError = (fieldName: string, error: Error): string => {
  const fieldMessages: ErrorMessages = {
    'nome': 'Nome inválido',
    'email': 'Email inválido',
    'senha': 'Senha inválida',
    // Adicione mais campos conforme necessário
  };

  return `${fieldMessages[fieldName] || fieldName}: ${error.message}`;
};

// Helper para verificar se é um erro do domínio
export const isDomainError = (error: Error): error is DomainError => {
  return error instanceof DomainError;
};

// Helper para verificar se é um erro de validação
export const isValidationError = (error: Error): error is ValidationError => {
  return error instanceof ValidationError;
}; 