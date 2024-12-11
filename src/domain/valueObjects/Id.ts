export class Id {
  private readonly _value: string;

  constructor(id?: string) {
    this._value = id || this.generate();
  }

  private generate(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  equals(other: Id): boolean {
    return this._value === other.value;
  }

  get value(): string {
    return this._value;
  }
} 