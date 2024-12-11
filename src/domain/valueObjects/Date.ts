export class Date {
  private readonly _value: Date;

  constructor(date?: Date | string) {
    if (date instanceof Date) {
      this._value = date;
    } else if (typeof date === 'string') {
      const convertedDate = new Date(date);
      if (isNaN(convertedDate.getTime())) {
        throw new Error('Invalid date');
      }
      this._value = convertedDate;
    } else {
      this._value = new Date();
    }
  }

  equals(other: Date): boolean {
    return this._value.getTime() === other.value.getTime();
  }

  get value(): Date {
    return new Date(this._value);
  }

  toString(): string {
    return this._value.toISOString();
  }
} 