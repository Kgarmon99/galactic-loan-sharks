import { useState } from 'react';
import InfoModal from '../InfoModal';
import { Button } from '@/components/ui/button';

export default function InfoModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-info">
        Open Info Modal
      </Button>
      <InfoModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
