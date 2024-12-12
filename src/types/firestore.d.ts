export interface FirestoreParticipant {
  id: string;
  name: string;
  email: string;
  _type: 'participant';
}

export interface FirestoreDraw {
  id: string;
  name: string;
  password: string;
  participants: FirestoreParticipant[];
  result: Record<string, string>;
  performed: boolean;
  creationDate: string;
  configured: boolean;
} 