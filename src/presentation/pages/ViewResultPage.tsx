import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { DrawFactory } from '../../infrastructure/factories/DrawFactory';
import { Draw } from '../../domain/entities/Draw';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Participant } from '../../domain/entities/Participant';
import { SecretSantaReveal } from '../components/SecretSantaReveal';
import { VerificationCodeInput } from '../components/VerificationCodeInput';
import { sendVerificationCodeFunction, verifyCodeFunction } from '../../lib/firebase';

interface ParticipantResult {
  giver: Participant;
  receiver: Participant;
}

interface VerifyCodeResponse {
  verified: boolean;
}

interface SendCodeResponse {
  success: boolean;
}

export default function ViewResultPage() {
  const navigate = useNavigate();
  const { id, email } = useParams<{ id: string; email: string }>();
  const [result, setResult] = useState<ParticipantResult | null>(null);
  const [draw, setDraw] = useState<Draw | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  useEffect(() => {
    const loadDraw = async () => {
      if (!id || !email) {
        setError('URL inválida');
        setLoading(false);
        return;
      }

      try {
        const repository = DrawFactory.createRepository();
        const drawData = await repository.findById(id);

        if (!drawData) {
          setError('Sorteio não encontrado');
          setLoading(false);
          return;
        }

        if (!drawData.performed) {
          setError('O sorteio ainda não foi realizado');
          setLoading(false);
          return;
        }

        setDraw(drawData);
        setLoading(false);

        // Enviar código de verificação automaticamente
        await sendVerificationCode();
        setIsCodeSent(true);
      } catch (error) {
        console.error('Erro ao carregar sorteio:', error);
        setError('Falha ao carregar o sorteio');
        setLoading(false);
      }
    };

    loadDraw();
  }, [id, email]);

  const sendVerificationCode = async () => {
    if (!id || !email) return;

    try {
      setLoading(true);
      const result = await sendVerificationCodeFunction({ drawId: id, email });
      const response = result.data as SendCodeResponse;
      
      if (response.success) {
        setIsCodeSent(true);
      }
    } catch (error: any) {
      console.error('Erro ao enviar código:', error);
      setError(error.message || 'Falha ao enviar código de verificação');
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async (code: string) => {
    if (!id || !email || !draw) return;

    try {
      setLoading(true);
      const result = await verifyCodeFunction({ drawId: id, email, code });
      const response = result.data as VerifyCodeResponse;
      
      if (response.verified) {
        setIsVerified(true);
        await loadResult();
      }
    } catch (error: any) {
      const message = error.message || 'Falha ao verificar código';
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const loadResult = async () => {
    if (!draw || !email) return;

    const giver = draw.participants.find(p => p.email === email);
    if (!giver) {
      setError('Participante não encontrado');
      return;
    }

    const receiverEmail = draw.result[email];
    if (!receiverEmail) {
      setError('Resultado não encontrado');
      return;
    }

    const receiver = draw.participants.find(p => p.email === receiverEmail);
    if (!receiver) {
      setError('Amigo secreto não encontrado');
      return;
    }

    setResult({ giver, receiver });
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
        <div className="max-w-md mx-auto">
          <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Erro</h2>
              <p className="text-gray-400 mb-6">{error}</p>
              <Button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para a página inicial
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!isVerified && email) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
        <div className="max-w-md mx-auto">
          <VerificationCodeInput
            email={email}
            isCodeSent={isCodeSent}
            onVerify={verifyCode}
            onResend={sendVerificationCode}
          />
        </div>
      </div>
    );
  }

  if (!result || !draw) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] p-8">
      <div className="max-w-2xl mx-auto">
        <SecretSantaReveal
          email={result.giver.email}
          drawName={draw.name}
          secretFriend={result.receiver.name}
        />
      </div>
    </div>
  );
}