import React, { useState } from 'react';
import { ConfigureDrawUseCase } from '../../../application/useCases/draw/ConfigureDrawUseCase';
import { formatErrorMessage } from '../../../domain/errors/formatErrorMessage';

interface InitialConfigurationProps {
  drawId: string;
  onConfiguration: () => void;
  configureUseCase: ConfigureDrawUseCase;
}

export const InitialConfiguration: React.FC<InitialConfigurationProps> = ({
  drawId,
  onConfiguration,
  configureUseCase
}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await configureUseCase.execute(drawId, name);
      onConfiguration();
    } catch (error) {
      setError(formatErrorMessage(error as Error));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Configure seu Amigo Secreto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome do Amigo Secreto
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Ex: Amigo Secreto da Familia"
          />
        </div>
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Configure Draw
        </button>
      </form>
    </div>
  );
}; 