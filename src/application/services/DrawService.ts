export class DrawService {
  async perform(draw: Draw): Promise<Draw> {
    if (draw.participants.length < 2) {
      throw new Error('Insufficient participants');
    }

    const participants = [...draw.participants];
    const result: Record<string, string> = {};
    
    // Embaralhar participantes
    for (let i = participants.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [participants[i], participants[j]] = [participants[j], participants[i]];
    }

    // Criar pares
    for (let i = 0; i < participants.length; i++) {
      const giver = participants[i];
      const receiver = participants[(i + 1) % participants.length];
      result[giver.email] = receiver.email;
    }

    return new Draw(
      draw.id,
      draw.name,
      draw.password,
      draw.participants,
      result,
      true // marcando como performed
    );
  }
} 