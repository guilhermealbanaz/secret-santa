import { Participant } from './Participant';

export class Draw {
  constructor(
    public readonly id: string,
    public readonly name: string = '',
    public readonly password: string = '',
    public readonly participants: Array<{name: string, email: string}> = [],
    public readonly result: Record<string, string> = {},
    public readonly performed: boolean = false
  ) {}

  static fromJSON(json: any): Draw {
    return new Draw(
      json.id,
      json.name || '',
      json.password || '',
      json.participants || [],
      json.result || {},
      json.performed || false
    );
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      participants: this.participants,
      result: this.result,
      performed: this.performed
    };
  }

  addParticipant(participant: { name: string; email: string }) {
    return new Draw(
      this.id,
      this.name,
      this.password,
      [...this.participants, participant],
      this.result
    );
  }
} 