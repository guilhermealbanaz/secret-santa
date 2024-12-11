export class Name {
  private readonly _value: string;

  constructor(name: string) {
    if (!this.isValid(name)) {
      throw new Error('Invalid name');
    }
    this._value = name.trim();
  }

  private isValid(name: string): boolean {
    if (!name || name.trim().length === 0) {
      return false;
    }
    if (name.trim().length < 2) {
      throw new Error('Name must have at least 2 characters');
    }
    if (name.trim().length > 100) {
      throw new Error('Name cannot have more than 100 characters');
    }
    return true;
  }

  equals(other: Name): boolean {
    return this._value.toLowerCase() === other.value.toLowerCase();
  }

  get value(): string {
    return this._value;
  }
} 