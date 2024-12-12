import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { Draw } from '../../domain/entities/Draw';
import { Button } from '../components/ui/button';
import { ArrowLeft, Gift, User } from 'lucide-react';
import { Participant } from '../../domain/entities/Participant';

interface ParticipantResult {
  giver: Participant;
  receiver: Participant;
}

export function ViewResultPage() {
  const navigate = useNavigate();
  const { id, email } = useParams<{ id: string; email: string }>();
  const [result, setResult] = useState<ParticipantResult | null>(null);
  const [draw, setDraw] = useState<Draw | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const loadResult = async () => {
      if (!id || !email) {
        setError('Invalid URL');
        setLoading(false);
        return;
      }

      try {
        const repository = DrawFactory.createRepository();
        const draw = await repository.findById(id);

        if (!draw) {
          setError('Draw not found');
          setLoading(false);
          return;
        }

        setDraw(draw);

        if (!draw.result || !draw.result[email]) {
          setError('Result not found');
          setLoading(false);
          return;
        }

        const giver = draw.participants.find(p => p.email === email);
        const receiverEmail = draw.result[email];
        const receiver = draw.participants.find(p => p.email === receiverEmail);

        if (!giver || !receiver) {
          setError('Participant not found');
          setLoading(false);
          return;
        }

        setResult({ giver, receiver });
        setLoading(false);
      } catch (error) {
        console.error('Error loading result:', error);
        setError('Error loading result');
        setLoading(false);
      }
    };

    loadResult();
  }, [id, email]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
        <p className="text-white">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <p className="text-red-500">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 text-gray-400 hover:text-white hover:bg-[#252B45] transition-all duration-300 flex items-center gap-2 px-4 py-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Voltar
      </Button>

      <div className="max-w-2xl mx-auto space-y-8 pt-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white">Seu Amigo Secreto</h1>
          <p className="text-xl text-gray-400/80">
            {draw?.name}
          </p>
        </div>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              {result?.giver?.name && `Olá, ${result.giver.name}!`}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {!revealed ? (
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Gift className="h-12 w-12 text-blue-400" />
                  </div>
                  <p className="text-gray-400">
                    Clique no botão abaixo para revelar seu amigo secreto
                  </p>
                  <Button
                    onClick={() => setRevealed(true)}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
                  >
                    Revelar Amigo Secreto
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-green-600/10 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Seu amigo secreto é</p>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {result?.receiver?.name}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {result?.receiver?.email}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#252B45]">
                    <p className="text-gray-400 text-sm">
                      Guarde essa informação com carinho e prepare uma surpresa especial! 🎁
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 