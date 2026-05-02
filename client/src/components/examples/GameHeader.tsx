import { useState } from 'react';
import GameHeader from '../GameHeader';

export default function GameHeaderExample() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="bg-background">
      <GameHeader 
        profit={12500}
        onFullscreenClick={() => console.log('Fullscreen clicked')}
        onInfoClick={() => console.log('Info clicked')}
        soundEnabled={soundEnabled}
        onSoundToggle={() => setSoundEnabled(!soundEnabled)}
      />
    </div>
  );
}
