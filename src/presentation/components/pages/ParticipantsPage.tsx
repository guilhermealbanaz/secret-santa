import { Draw } from '../../../domain/entities/Draw';

interface ParticipantsPageProps {
  draw?: Draw;
}

export function ParticipantsPage({ draw }: ParticipantsPageProps) {
  const canPerformDraw = (draw?.participants?.length ?? 0) >= 4;

  return (
    <div>
      {!canPerformDraw && (
        <div className="text-gray-400 text-sm">
          Adicione mais {4 - (draw?.participants?.length ?? 0)} participantes para realizar o sorteio
        </div>
      )}
    </div>
  );
} 