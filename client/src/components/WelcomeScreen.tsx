import { useState } from "react";
import { Info, ArrowRight, Coins, Check } from "lucide-react";
import { avatars, type Avatar } from "@/lib/avatars";
import moneybotLogo from "@assets/new-moneybot-logo_1764344834245.png";

interface WelcomeScreenProps {
  onStart: (playerName: string, avatar: Avatar) => void;
  onInfoClick: () => void;
}

export default function WelcomeScreen({ onStart, onInfoClick }: WelcomeScreenProps) {
  const [playerName, setPlayerName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);
  const [step, setStep] = useState<'name' | 'avatar'>('name');

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) setStep('avatar');
  };

  const handleStartGame = () => {
    if (playerName.trim() && selectedAvatar) {
      onStart(playerName.trim(), selectedAvatar);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0612] overflow-hidden relative scanlines">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '8px 8px'
      }} />

      <button
        onClick={onInfoClick}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-yellow-400/60 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all z-10 pixel-border-sm"
        data-testid="button-info"
      >
        <Info className="w-5 h-5" />
      </button>

      <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-lg">

          {step === 'name' && (
            <div className="text-center space-y-5 sm:space-y-8 animate-in fade-in duration-500">
              <div className="flex items-center justify-center">
                <img
                  src={moneybotLogo}
                  alt="MoneyBot"
                  className="w-24 h-24 sm:w-36 sm:h-36 object-contain drop-shadow-[0_0_30px_rgba(34,255,100,0.5)]"
                  style={{ imageRendering: 'auto' }}
                />
              </div>

              <div className="space-y-3">
                <p className="text-yellow-400 uppercase tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem' }}>
                  MoneyBot Presents
                </p>
                <h1 className="pixel-title text-pink-500 tracking-wider" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(1.25rem, 7vw, 2rem)' }}>
                  GALACTIC
                </h1>
                <h2 className="pixel-title text-yellow-400 tracking-wider" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(0.95rem, 5.5vw, 1.5rem)' }}>
                  LOAN SHARKS
                </h2>
                <div className="h-1 w-48 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500" />
                <p className="text-purple-300 uppercase tracking-[0.2em] sm:tracking-[0.3em]" style={{ fontFamily: "'VT323', monospace", fontSize: '1.15rem' }}>
                  Space Station Lending Sim
                </p>
              </div>

              <div className="bg-black/80 border-4 border-pink-500/50 p-6 space-y-4">
                <p className="text-yellow-400 font-bold uppercase" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem' }}>
                  ENTER YOUR NAME
                </p>
                <form onSubmit={handleNameSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="YOUR NAME"
                    className="w-full h-14 text-center bg-purple-900/50 border-4 border-purple-500/50 text-yellow-400 placeholder-purple-400/50 focus:border-pink-500 focus:outline-none transition-colors"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.8rem' }}
                    autoFocus
                    maxLength={12}
                    data-testid="input-player-name"
                  />
                  <button
                    type="submit"
                    disabled={!playerName.trim()}
                    className={`w-full h-14 font-bold flex items-center justify-center gap-3 transition-all uppercase ${
                      playerName.trim()
                        ? 'bg-pink-600 hover:bg-pink-500 text-white border-4 border-pink-400 hover:scale-105 shadow-[0_6px_0_#9d174d] hover:shadow-[0_4px_0_#9d174d] hover:translate-y-0.5'
                        : 'bg-gray-800 text-gray-600 border-4 border-gray-700 cursor-not-allowed'
                    }`}
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem' }}
                    data-testid="button-start"
                  >
                    <span>NEXT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <p className="text-purple-500/40 text-xs" style={{ fontFamily: "'VT323', monospace" }}>
                YEAR 2485 · SECTOR 7G
              </p>
            </div>
          )}

          {step === 'avatar' && (
            <div className="text-center space-y-5 animate-in fade-in duration-300">
              <div className="space-y-2">
                <h2 className="text-pink-500 font-black" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.85rem' }}>
                  PICK YOUR LOOK
                </h2>
                <p className="text-purple-300" style={{ fontFamily: "'VT323', monospace", fontSize: '1.2rem' }}>
                  Welcome, <span className="text-yellow-400 font-bold">{playerName.toUpperCase()}</span>!
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" data-testid="avatar-selection">
                {avatars.map((avatar) => (
                  <button
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`relative p-2 border-4 transition-all duration-200 hover:scale-105 ${
                      selectedAvatar?.id === avatar.id
                        ? `${avatar.bgClass} border-yellow-400 ring-2 ring-yellow-400`
                        : 'bg-black/50 border-purple-500/30 hover:border-purple-400'
                    }`}
                    data-testid={`avatar-${avatar.id}`}
                  >
                    {selectedAvatar?.id === avatar.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 flex items-center justify-center z-10">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                    )}
                    <div className="mb-1 flex items-center justify-center">
                      <img
                        src={avatar.imageUrl}
                        alt={avatar.name}
                        className="w-14 h-14 object-contain"
                        style={{ imageRendering: 'auto' }}
                      />
                    </div>
                    <p className={`text-[0.5rem] font-bold ${avatar.color}`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
                      {avatar.name}
                    </p>
                    <p className="text-purple-400/60 text-[0.45rem]" style={{ fontFamily: "'VT323', monospace" }}>
                      {avatar.description}
                    </p>
                  </button>
                ))}
              </div>

              <button
                onClick={handleStartGame}
                disabled={!selectedAvatar}
                className={`w-full h-14 font-bold flex items-center justify-center gap-3 transition-all uppercase ${
                  selectedAvatar
                    ? 'bg-pink-600 hover:bg-pink-500 text-white border-4 border-pink-400 hover:scale-105 shadow-[0_6px_0_#9d174d] hover:shadow-[0_4px_0_#9d174d] hover:translate-y-0.5'
                    : 'bg-gray-800 text-gray-600 border-4 border-gray-700 cursor-not-allowed'
                }`}
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.6rem' }}
                data-testid="button-play"
              >
                <Coins className="w-4 h-4" />
                BEGIN HUNTING
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setStep('name')}
                className="text-purple-400/60 hover:text-purple-300 text-sm transition-colors"
                style={{ fontFamily: "'VT323', monospace" }}
                data-testid="button-back-name"
              >
                &lt; BACK
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            <p className="text-purple-500/30 text-xs" style={{ fontFamily: "'VT323', monospace" }}>
              GALACTIC LOAN SHARKS INC · SECTOR 7G
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
