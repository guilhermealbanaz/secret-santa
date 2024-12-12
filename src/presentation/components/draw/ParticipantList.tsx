import React, { useState } from 'react';
import { AddParticipantUseCase } from '../../../application/useCases/participant/AddParticipantUseCase';
import { RemoveParticipantUseCase } from '../../../application/useCases/participant/RemoveParticipantUseCase';
import { Participant } from '../../../domain/entities/Participant';
import { formatErrorMessage } from '../../../domain/errors/formatErrorMessage';

interface ParticipantListProps {
  drawId: string;
  participants: Participant[];
  drawPerformed: boolean;
  addUseCase: AddParticipantUseCase;
  removeUseCase: RemoveParticipantUseCase;
  onCopyLink: () => void;
}

export const ParticipantList: React.FC<ParticipantListProps> = ({
  drawId,
  participants,
  drawPerformed,
  addUseCase,
  removeUseCase,
  onCopyLink
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setStatusMessage('');

    try {
      await addUseCase.execute(drawId, name, email);
      setName('');
      setEmail('');
      setStatusMessage('Participant added successfully!');
      setTimeout(() => setStatusMessage(''), 3000);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error as Error));
    }
  };

  const handleRemove = async (participantId: string) => {
    try {
      await removeUseCase.execute(drawId, participantId);
      setStatusMessage('Participant removed successfully!');
      setTimeout(() => setStatusMessage(''), 3000);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error as Error));
    }
  };

  return (
    <div className="space-y-6">
      {errorMessage && (
        <div className="text-red-600 text-sm">{errorMessage}</div>
      )}
      {statusMessage && (
        <div className="text-green-600 text-sm">{statusMessage}</div>
      )}
      {!drawPerformed && (
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Participant
          </button>
        </form>
      )}
      <div className="mt-4">
        {participants.map(participant => (
          <div key={participant.id} className="flex justify-between items-center py-2">
            <span>{participant.name}</span>
            <button onClick={() => handleRemove(participant.id)} className="text-red-500">
              Remove
            </button>
          </div>
        ))}
      </div>
      <button onClick={onCopyLink} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
        Copy Link
      </button>
    </div>
  );
}; 