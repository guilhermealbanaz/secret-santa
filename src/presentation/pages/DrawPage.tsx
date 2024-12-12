import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { Draw } from '../../domain/entities/Draw';
import { ArrowLeft } from 'lucide-react';
import { formatErrorMessage } from '../../domain/errors/formatErrorMessage';

export default function DrawPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const backToHome = () => {
    navigate('/', { replace: true });
  };

  const saveConfiguration = async () => {
    if (!name || !password || !id) return;
    setLoading(true);
    setError(null);

    try {
      const repository = DrawFactory.createRepository();
      const draw = new Draw(id, name, password);
      await repository.update(draw);
      navigate(`/draw/${id}/participants`);
    } catch (error) {
      setError(formatErrorMessage(error as Error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
      <Button
        variant="ghost"
        onClick={backToHome}
        className="absolute top-8 left-8 text-gray-400 hover:text-white hover:bg-[#252B45] transition-all duration-300 flex items-center gap-2 px-4 py-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </Button>

      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold text-white">Customize seu Amigo Secreto</h1>
          <p className="text-xl text-gray-400/80">
            Configure seu Amigo Secreto em segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Sobre o Amigo Secreto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Nome do Amigo Secreto</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Amigo Secreto da Familia"
                  className="bg-[#1A2038] border-[#252B45] text-white h-11"
                />
                <p className="text-xs text-gray-500">
                  This name will be visible to all participants
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Senha do Organizador</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite uma senha segura"
                  className="bg-[#1A2038] border-[#252B45] text-white h-11"
                />
                <p className="text-xs text-gray-500">
                  Você precisará desta senha para gerenciar o sorteio
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-500 text-sm text-center">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Próximos Passos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Configure o Amigo Secreto</h3>
                    <p className="text-sm text-gray-400">
                      Defina o nome e a senha do organizador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A2038] flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-medium">Adicione Participantes</h3>
                    <p className="text-sm text-gray-400">
                      Convidar pessoas para participar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A2038] flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-medium">Realize o Sorteio</h3>
                    <p className="text-sm text-gray-400">
                      Faça o sorteio quando todos estiverem prontos
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={saveConfiguration}
                disabled={!name || !password || loading}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Salvando...' : 'Continuar Configuração'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 