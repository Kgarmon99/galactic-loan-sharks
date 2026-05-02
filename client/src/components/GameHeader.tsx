import { Button } from "@/components/ui/button";
import { Info, Volume2, VolumeX, Coins, Zap } from "lucide-react";
import moneybotLogo from "@assets/new-moneybot-logo_1764299570120.png";

interface GameHeaderProps {
  profit: number;
  onFullscreenClick: () => void;
  onInfoClick: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  profitAnimating?: boolean;
  consecutiveOptimal?: number;
}

export default function GameHeader({ 
  profit, 
  onInfoClick, 
  soundEnabled,
  onSoundToggle,
  profitAnimating,
  consecutiveOptimal = 0
}: GameHeaderProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <header className="relative z-20 flex items-center justify-between p-3 pixel-border bg-card/95 backdrop-blur-sm mx-4 mt-4 rounded-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
          <img
            src={moneybotLogo}
            alt="Moneybot"
            className="w-10 h-10 relative z-10"
            data-testid="img-header-logo"
          />
        </div>
        <div>
          <div className="pixel-label text-white neon-glow-subtle" data-testid="text-header-title">
            Moneybot
          </div>
          <div className="text-xs text-cyan-300 body-text">Space Lending Academy</div>
        </div>
      </div>

      {/* Stats display */}
      <div className="flex items-center gap-4">
        {/* Combo indicator */}
        {consecutiveOptimal >= 2 && (
          <div className="hidden sm:flex items-center gap-2 border border-yellow-500/50 bg-black/70 px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="pixel-label text-yellow-200">x{consecutiveOptimal}</span>
          </div>
        )}

        {/* Profit display */}
        <div className="border-2 border-primary/50 bg-black/80 px-4 py-2 rounded-lg flex items-center gap-3">
          <Coins className="w-5 h-5 text-primary" />
          <div>
            <div className="pixel-label text-cyan-300" style={{ fontSize: '0.5rem' }}>Credits</div>
            <div 
              className={`text-lg font-bold text-white neon-glow-subtle ${profitAnimating ? 'profit-increase' : ''}`} 
              data-testid="text-profit-counter"
            >
              {formatCurrency(profit)}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={onSoundToggle}
            className="border border-primary/30 hover-elevate active-elevate-2"
            data-testid="button-sound-toggle"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onInfoClick}
            className="border border-primary/30 hover-elevate active-elevate-2"
            data-testid="button-info-header"
          >
            <Info className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
