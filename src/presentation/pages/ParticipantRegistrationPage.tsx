import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { Participant } from '../../domain/entities/Participant';
import { Draw } from '../../domain/entities/Draw';
import { formatErrorMessage } from '../../domain/errors/formatErrorMessage';

export default function ParticipantRegistrationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateInputs = (): boolean => {
    if (!name.trim()) {
      setError('Nome é obrigatório');
      return false;
    }
    if (!email.trim()) {
      setError('Email é obrigatório');
      return false;
    }
    return true;
  };

  const registerParticipant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !validateInputs()) return;

    setLoading(true);
    setError(null);

    try {
      const repository = DrawFactory.createRepository();
      const draw = await repository.findById(id);

      if (!draw) {
        setError('Sorteio não encontrado');
        return;
      }

      if (draw.participants?.some(p => p.email.toLowerCase() === email.toLowerCase())) {
        setError('Este email já está registrado');
        return;
      }

      const newParticipant = Participant.create(name.trim(), email.trim().toLowerCase());
      const updatedParticipants = [...(draw.participants || []), newParticipant];
      
      const updatedDraw = new Draw(
        id,
        draw.name,
        draw.password,
        updatedParticipants,
        draw.result,
        draw.performed
      );

      await repository.update(updatedDraw);
      setSuccess(true);
    } catch (error) {
      console.error('Error registering participant:', error);
      setError(formatErrorMessage(error as Error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white">Junte-se ao Sorteio</h1>
          <p className="text-lg text-gray-400/80">Preencha seus detalhes para participar</p>
        </div>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Registro do Sorteio
            </CardTitle>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Registro Completo!</h3>
                <p className="text-gray-400">
                  Você receberá mais informações por email quando o sorteio for realizado.
                </p>
                <Button
                  onClick={() => navigate('/')}
                  className="mt-4 w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
                >
                  Voltar para Home
                </Button>
              </div>
            ) : (
              <form onSubmit={registerParticipant} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Nome</label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#1A2038] border-[#252B45] text-white h-11"
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#1A2038] border-[#252B45] text-white h-11"
                      placeholder="Digite seu email"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Participar do Sorteio'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 