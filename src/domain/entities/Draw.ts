import { Participant } from './Participant';
import { Password } from '../valueObjects/Password';
import { Name } from '../valueObjects/Name';

export class Draw {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly password: string,
    public readonly participants: Participant[] = [],
    public readonly result: Record<string, string> = {},
    public readonly performed: boolean = false,
    public readonly creationDate: Date = new Date(),
    public readonly configured: boolean = false
  ) {}

  setName(name: Name): Draw {
    return new Draw(
      this.id,
      name.value,
      this.password,
      this.participants,
      this.result,
      this.performed,
      this.creationDate,
      this.configured
    );
  }

  setPassword(password: Password): Draw {
    return new Draw(
      this.id,
      this.name,
      password.value,
      this.participants,
      this.result,
      this.performed,
      this.creationDate,
      this.configured
    );
  }

  performDraw(): Draw {
    if (this.participants.length < 4) {
      throw new Error('Minimum of 4 participants required');
    }

    const shuffled = [...this.participants].sort(() => Math.random() - 0.5);
    const result: Record<string, string> = {};

    shuffled.forEach((participant, index) => {
      const nextIndex = (index + 1) % shuffled.length;
      result[participant.email] = shuffled[nextIndex].email;
    });

    return new Draw(
      this.id,
      this.name,
      this.password,
      this.participants,
      result,
      true,
      this.creationDate,
      this.configured
    );
  }

  checkPassword(password: Password): boolean {
    return this.password === password.value;
  }

  findSecretFriend(participant: Participant): Participant | null {
    const secretFriendEmail = this.result[participant.email];
    return this.participants.find(p => p.email === secretFriendEmail) || null;
  }

  static fromJSON(data: any): Draw {
    return new Draw(
      data.id,
      data.name || '',
      data.password || '',
      (data.participants || []).map((p: any) => new Participant(
        p.id,
        p.name || '',
        p.email || ''
      )),
      data.result || {},
      data.performed || false,
      data.creationDate ? new Date(data.creationDate) : new Date(),
      data.configured || false
    );
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      participants: this.participants ? this.participants.map(p => ({
        id: p.id,
        name: p.name,
        email: p.email
      })) : [],
      result: this.result || {},
      performed: this.performed || false,
      creationDate: this.creationDate.toISOString(),
      configured: this.configured || false
    };
  }
} 