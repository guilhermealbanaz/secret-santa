import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Draw } from '../../domain/entities/Draw';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { ArrowLeft, Link as LinkIcon, Check, Mail } from 'lucide-react';
import { config } from '../../lib/config';

export const DrawResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [draw, setDraw] = useState<Draw | null>(null);
  const [loading, setLoading] = useState(true);
  const [linkCopied, setLinkCopied] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const loadDraw = async () => {
      if (!id) return;

      try {
        const repository = DrawFactory.createRepository();
        unsubscribe = await repository.observe(id, (newDraw) => {
          if (!newDraw.performed) {
            navigate(`/draw/${id}/participants`);
            return;
          }
          setDraw(newDraw);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error loading draw:', error);
        setError('Error loading draw results');
        setLoading(false);
      }
    };

    loadDraw();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [id, navigate]);

  const copyLink = async (email: string) => {
    const link = `${config.baseUrl}/draw/${id}/result/${email}`;
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(email);
      setTimeout(() => setLinkCopied(null), 2000);
    } catch (err) {
      console.error('Error copying link:', err);
    }
  };

  const backToHome = () => {
    navigate('/', { replace: true });
  };

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <p className="text-red-500 text-xl mb-4">{error}</p>
            <Button
              onClick={() => navigate(`/draw/${id}/participants`)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Voltar para Participantes
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
        <p className="text-white">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
      <Button
        variant="ghost"
        onClick={backToHome}
        className="absolute top-8 left-8 text-gray-400 hover:text-white hover:bg-[#252B45] transition-all duration-300 flex items-center gap-2 px-4 py-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Voltar
      </Button>

      <div className="max-w-4xl mx-auto space-y-8 pt-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white">Draw Results</h1>
          <p className="text-xl text-gray-400/80">
            Compartilhe os links com cada participante para revelar seus amigos secretos
          </p>
        </div>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Links dos Participantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {draw?.participants?.map((participant, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#1A2038] rounded-lg border border-[#252B45] hover:border-[#353B55] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{participant.name}</p>
                      <p className="text-gray-400 text-sm">{participant.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className={`
                      min-w-[120px] h-9
                      flex items-center justify-center gap-2
                      font-medium transition-all duration-300
                      ${linkCopied === participant.email
                        ? 'bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20'
                        : 'bg-[#1A2038] text-gray-300 border-[#252B45] hover:bg-gray-700 hover:text-white'
                      }
                    `}
                    onClick={() => copyLink(participant.email)}
                  >
                    {linkCopied === participant.email ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
                    <span>{linkCopied === participant.email ? 'Link copiado' : 'Copiar link'}</span>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 