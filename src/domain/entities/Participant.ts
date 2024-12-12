import { Email } from '../valueObjects/Email';
import { Name } from '../valueObjects/Name';
import { Id } from '../valueObjects/Id';
import { ValidationError } from '../errors/DomainErrors';

export class Participant {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _email: string;

  constructor(id: string, name: string, email: string) {
    try {
      new Id(id); // validate id
      new Name(name); // validate name
      new Email(email); // validate email
      
      this._id = id;
      this._name = name;
      this._email = email;
    } catch (error) {
      throw new ValidationError((error as Error).message);
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  static create(name: string, email: string): Participant {
    return new Participant(new Id().value, name, email);
  }

  equals(other: Participant): boolean {
    return this._id === other.id;
  }

  toJSON(): any {
    return {
      id: this._id,
      name: this._name,
      email: this._email
    };
  }

  static fromJSON(data: any): Participant {
    return new Participant(
      data.id,
      data.name,
      data.email
    );
  }
} 