import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Draw } from '../../domain/entities/Draw';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { Participant } from '../../domain/entities/Participant';
import { Trash2, Link as LinkIcon, Check, Shuffle } from 'lucide-react';
import { formatErrorMessage } from '../../domain/errors/formatErrorMessage';

export function ParticipantsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [draw, setDraw] = useState<Draw | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    if (!id) return;

    const repository = DrawFactory.createRepository();
    const unsubscribe = repository.observe(id, (updatedDraw) => {
      setDraw(updatedDraw);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !draw || !id) return;

    setLoading(true);
    setError(null);

    try {
      const repository = DrawFactory.createRepository();
      
      // Verificar se o email já está registrado
      if (draw.participants?.some(p => p.email.toLowerCase() === email.toLowerCase())) {
        setError('Este email já está registrado');
        setLoading(false);
        return;
      }

      // Criar novo participante
      const newParticipant = Participant.create(
        name.trim(),
        email.trim().toLowerCase()
      );

      // Criar novo Draw com o participante adicionado
      const updatedDraw = new Draw(
        id,
        draw.name,
        draw.password,
        [...(draw.participants || []), newParticipant],
        draw.result || {},
        draw.performed || false,
        draw.creationDate,
        draw.configured
      );

      await repository.update(updatedDraw);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding participant:', error);
      setError(formatErrorMessage(error as Error));
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (participantId: string) => {
    if (!draw || !id) return;

    try {
      const repository = DrawFactory.createRepository();
      const updatedParticipants = draw.participants.filter(p => p.id !== participantId);
      
      const updatedDraw = new Draw(
        id,
        draw.name,
        draw.password,
        updatedParticipants,
        draw.result,
        draw.performed,
        draw.creationDate,
        draw.configured
      );

      await repository.update(updatedDraw);
    } catch (error) {
      console.error('Error removing participant:', error);
      setError(formatErrorMessage(error as Error));
    }
  };

  const copyLink = async () => {
    if (!id) return;
    
    const link = `${window.location.origin}/draw/${id}/register`;
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Error copying link:', err);
    }
  };

  const performDraw = async () => {
    if (!draw || !id || draw.participants.length < 4) return;
    
    try {
      const repository = DrawFactory.createRepository();
      const updatedDraw = draw.performDraw();
      await repository.update(updatedDraw);
      navigate(`/draw/${id}/result`);
    } catch (error) {
      console.error('Error performing draw:', error);
      setError(formatErrorMessage(error as Error));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  const canPerformDraw = draw?.participants?.length >= 4;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
      <div className="max-w-4xl mx-auto space-y-8 pb-24">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white">Manage Participants</h1>
          <p className="text-lg text-gray-400/80">Add or remove participants from your draw</p>
        </div>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Share Draw
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-[#1A2038] p-3 rounded-lg text-gray-400 text-sm border border-[#252B45]">
                {window.location.origin}/draw/{id}/register
              </div>
              <Button
                variant="outline"
                className={`
                  min-w-[140px] h-11 
                  flex items-center justify-center gap-2
                  font-medium transition-all duration-300
                  border rounded-lg
                  ${linkCopied 
                    ? 'bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50' 
                    : 'bg-[#1A2038] text-gray-300 border-[#252B45] hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-500/50'
                  }
                `}
                onClick={copyLink}
              >
                {linkCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Add Participant
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-400">Name</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#1A2038] border-[#252B45] text-white"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1A2038] border-[#252B45] text-white"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <Button
              onClick={handleAdd}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Add Participant
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Participants List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {draw?.participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center justify-between p-4 bg-[#1A2038] rounded-lg border border-[#252B45]"
                >
                  <div>
                    <p className="font-medium text-white">{participant.name}</p>
                    <p className="text-sm text-gray-400">{participant.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => handleRemove(participant.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}

              {draw?.participants.length === 0 && (
                <p className="text-center text-gray-400 py-4">
                  No participants added yet
                </p>
              )}

              {!canPerformDraw && (
                <div className="text-gray-400 text-sm">
                  Adicione mais {4 - draw?.participants.length} participantes para realizar o sorteio
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {canPerformDraw && (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 px-8">
            <Button
              onClick={performDraw}
              className="
                w-full max-w-2xl
                bg-gradient-to-r from-emerald-500 to-green-600
                hover:from-emerald-400 hover:to-green-500
                text-white font-semibold
                disabled:opacity-50
                shadow-lg shadow-green-500/20
                h-12 text-base
                transition-all duration-300
                rounded-xl
                flex items-center justify-center gap-3
              "
            >
              <Shuffle className="w-4 h-4" />
              Realizar Sorteio
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 