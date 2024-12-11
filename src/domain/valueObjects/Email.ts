export class Email {
  private readonly _value: string;

  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new Error('Email inválido');
    }
    this._value = email.toLowerCase().trim();
  }

  private isValid(email: string): boolean {
    if (!email || email.trim().length === 0) {
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  equals(other: Email): boolean {
    return this._value === other.value;
  }

  get value(): string {
    return this._value;
  }
} 