import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Gift, Sparkles } from 'lucide-react';

interface SecretSantaRevealProps {
  email: string;
  drawName: string;
  secretFriend: string;
}

export const SecretSantaReveal: React.FC<SecretSantaRevealProps> = ({
  email,
  drawName,
  secretFriend
}) => {
  return (
    <Card className="bg-gradient-to-br from-[#151B30]/80 to-[#1F2B4B]/80 border border-[#252B45]/50 shadow-2xl backdrop-blur-md hover:shadow-blue-500/10 transition-all duration-300">
      <CardHeader className="relative">
        <Sparkles className="absolute top-4 right-4 w-5 h-5 text-blue-400/60" />
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {drawName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300 group">
              <Gift className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-gray-400 text-lg">
              Seu amigo secreto é
            </p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              {secretFriend}
            </h2>
          </div>

          <div className="space-y-4 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10">
            <p className="text-sm text-blue-300/80 text-center">
              🤫 Lembre-se: isso é um segredo! Guarde essa informação com carinho.
            </p>
            <p className="text-sm text-purple-300/80 text-center">
              🎁 Prepare um presente especial que {secretFriend} vai adorar!
            </p>
          </div>

          <div className="pt-6 border-t border-[#252B45]/50">
            <p className="text-xs text-gray-500 text-center hover:text-gray-400 transition-colors duration-300">
              Este resultado foi enviado para{' '}
              <span className="text-blue-400/80">{email}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 