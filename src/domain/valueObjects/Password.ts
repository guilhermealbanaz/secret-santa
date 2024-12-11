export class Password {
  private readonly _value: string;

  constructor(password: string) {
    if (!this.isValid(password)) {
      throw new Error('Invalid password');
    }
    this._value = password;
  }

  private isValid(password: string): boolean {
    if (!password || password.trim().length === 0) {
      return false;
    }
    if (password.length < 4) {
      throw new Error('Password must have at least 4 characters');
    }
    if (password.length > 50) {
      throw new Error('Password cannot have more than 50 characters');
    }
    return true;
  }

  equals(other: Password): boolean {
    return this._value === other.value;
  }

  get value(): string {
    return this._value;
  }
} 