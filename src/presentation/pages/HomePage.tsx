import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function HomePage() {
  const navigate = useNavigate();

  const createNewDraw = () => {
    const drawId = Math.random().toString(36).substr(2, 9);
    navigate(`/draw/${drawId}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-normal">
            Amigo Secreto
          </h1>
          <p className="text-xl text-gray-400/80">
            Organize seu Amigo Secreto facilmente e de forma segura!
          </p>
        </div>

        <Card className="bg-[#151B30]/50 border border-[#252B45] shadow-xl backdrop-blur-sm">
          <CardContent className="p-6">
            <Button 
              onClick={createNewDraw}
              className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white rounded-lg font-medium"
            >
              Sortear Amigo Secreto
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}