import { Email } from '../valueObjects/Email';
import { Name } from '../valueObjects/Name';

export class Participant {
  private _id: string;
  private _name: Name;
  private _email: Email;

  constructor(id: string, name: string, email: string) {
    this._id = id;
    this._name = new Name(name);
    this._email = new Email(email);
  }

  get id(): string { return this._id; }
  get name(): string { return this._name.value; }
  get email(): string { return this._email.value; }
} 