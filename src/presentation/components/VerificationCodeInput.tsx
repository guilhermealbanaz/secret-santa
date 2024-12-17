import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Loader2, Mail } from 'lucide-react';

interface VerificationCodeInputProps {
  email: string;
  isCodeSent: boolean;
  onVerify: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
}

export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  email,
  isCodeSent,
  onVerify,
  onResend
}) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await onVerify(code);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro ao verificar código');
      setCode('');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError(null);
    setLoading(true);

    try {
      await onResend();
      setCountdown(60); // 60 segundos de espera
      setCode('');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro ao reenviar código');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center">
          Verificação de Segurança
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-300">
              Enviamos um código de verificação para
            </p>
            <p className="text-white font-medium">{email}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Digite o código de 6 dígitos"
                className="text-center text-xl tracking-wider h-12"
                maxLength={6}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-500 text-sm text-center">{error}</p>
              </div>
            )}

            <div className="space-y-3">
              <Button
                type="submit"
                disabled={code.length !== 6 || loading}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Verificar Código'
                )}
              </Button>

              <Button
                type="button"
                variant="ghost"
                disabled={countdown > 0 || loading}
                onClick={handleResend}
                className="w-full h-11 text-gray-400 hover:text-white"
              >
                {countdown > 0 
                  ? `Aguarde ${countdown}s para reenviar` 
                  : 'Reenviar código'}
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}; 