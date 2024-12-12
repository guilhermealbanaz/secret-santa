export class DateVO {
  private readonly _value: Date;

  constructor(date: Date | string) {
    const convertedDate = typeof date === 'string' ? new Date(date) : date;
    
    if (!(convertedDate instanceof Date) || Number.isNaN(convertedDate.getTime())) {
      throw new Error('Invalid date');
    }

    this._value = convertedDate;
  }

  get value(): Date {
    return this._value;
  }

  equals(other: DateVO): boolean {
    return this._value.getTime() === other.value.getTime();
  }

  toString(): string {
    return this._value.toISOString();
  }
} 