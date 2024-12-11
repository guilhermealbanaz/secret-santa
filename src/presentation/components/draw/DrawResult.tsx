import React, { useState } from 'react';
import { ViewResultUseCase } from '../../../application/useCases/draw/ViewResultUseCase';
import { Participant } from '../../../domain/entities/Participant';
import { formatErrorMessage } from '../../../domain/errors/formatErrorMessage';

interface DrawResultProps {
  drawId: string;
  participantId: string;
  viewUseCase: ViewResultUseCase;
}

export const DrawResult: React.FC<DrawResultProps> = ({
  drawId,
  participantId,
  viewUseCase
}) => {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<{
    participant: Participant;
    secretFriend: Participant;
  } | null>(null);
  const [error, setError] = useState('');

  const handleViewResult = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await viewUseCase.execute(drawId, participantId, password);
      setResult(result);
    } catch (error) {
      setError(formatErrorMessage(error as Error));
    }
  };

  return (
    <div className="space-y-6">
      {!result ? (
        <form onSubmit={handleViewResult} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter the draw password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            View My Secret Friend
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-md">
            <h3 className="text-lg font-medium text-green-800">
              Your secret friend is:
            </h3>
            <p className="mt-2 text-xl font-bold text-green-900">
              {result.secretFriend.name}
            </p>
          </div>
          <button
            onClick={() => setResult(null)}
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Hide result
          </button>
        </div>
      )}
    </div>
  );
}; 