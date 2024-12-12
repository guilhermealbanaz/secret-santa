export class Email {
  private readonly _value: string;

  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new Error('Invalid email format');
    }
    this._value = email;
  }

  private isValid(email: string): boolean {
    if (!email || typeof email !== 'string') return false;
    
    // Regex mais permissiva para validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  get value(): string {
    return this._value;
  }

  equals(other: Email): boolean {
    return this._value === other.value;
  }

  toString(): string {
    return this._value;
  }
} 