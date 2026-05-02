import type { GameResult } from "@shared/schema";
import { educationalInsights, redFlagSignatures } from "@/lib/gameData";
import { RotateCcw, Home, CheckCircle2, Circle, Lightbulb, Trophy, TrendingUp, Target, Skull, Coins, AlertTriangle, ShieldCheck, ArrowRightLeft, BookOpen } from "lucide-react";
import type { Avatar } from "@/lib/avatars";
import moneybotLogo from "@assets/new-moneybot-logo_1764344834245.png";

interface ResultsScreenProps {
  result: GameResult;
  playerName: string;
  playerAvatar: Avatar;
  onPlayAgain: () => void;
  onBackToStart: () => void;
}

export default function ResultsScreen({ result, playerName, playerAvatar, onPlayAgain, onBackToStart }: ResultsScreenProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const accuracy = result.optimalChoices ? Math.round((result.optimalChoices / result.loansIssued) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0a0612] overflow-auto relative scanlines">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '8px 8px'
      }} />
      
      <div className="max-w-lg mx-auto p-4 sm:p-6 py-6 sm:py-10 relative z-10 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center animate-in fade-in duration-500 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <img 
              src={moneybotLogo} 
              alt="MoneyBot" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
            <img 
              src={moneybotLogo} 
              alt="MoneyBot" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <div className="relative inline-block mx-auto">
            <div className={`absolute inset-0 blur-[60px] scale-150 ${playerAvatar.glowClass}`} />
            <div className="absolute inset-0 bg-yellow-500/20 blur-[40px] scale-125" />
            <div className={`w-28 h-28 ${playerAvatar.bgClass} border-4 ${playerAvatar.borderClass} flex items-center justify-center mx-auto relative overflow-hidden`}
              data-testid="img-results-avatar"
            >
              <img
                src={playerAvatar.imageUrl}
                alt={playerAvatar.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-black text-pink-500" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '1.1rem' }} data-testid="text-results-title">
            SHIFT COMPLETE
          </h1>
          <p className="text-purple-300" style={{ fontFamily: "'VT323', monospace", fontSize: '1.4rem' }}>
            Well done, <span className="text-yellow-400 font-bold">{playerName.toUpperCase()}</span>!
          </p>
        </div>

        {/* Total Profit */}
        <div className="bg-black/80 border-4 border-yellow-500/60 p-4 sm:p-6 text-center animate-in fade-in duration-500 delay-100">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Coins className="w-5 h-5 text-yellow-400" />
            <p className="text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}>CREDITS EXTRACTED</p>
          </div>
          <p className="text-5xl font-black text-yellow-400" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '2rem' }} data-testid="text-total-profit">
            {formatCurrency(result.totalProfit)}
          </p>
          <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-yellow-500 to-pink-500" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 animate-in fade-in duration-500 delay-150">
          <div className="bg-black/60 border-2 border-purple-500/40 p-3 text-center">
            <TrendingUp className="w-4 h-4 text-purple-400 mx-auto mb-2" />
            <p className="text-purple-400/60 text-[0.45rem] mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>VICTIMS</p>
            <p className="text-xl font-bold text-purple-300" style={{ fontFamily: "'VT323', monospace", fontSize: '1.8rem' }} data-testid="text-loans-issued">
              {result.loansIssued}
            </p>
          </div>
          <div className="bg-black/60 border-2 border-pink-500/40 p-3 text-center">
            <Target className="w-4 h-4 text-pink-400 mx-auto mb-2" />
            <p className="text-pink-400/60 text-[0.45rem] mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>MAX HITS</p>
            <p className="text-xl font-bold text-pink-300" style={{ fontFamily: "'VT323', monospace", fontSize: '1.8rem' }}>
              {result.optimalChoices || 0}/{result.loansIssued}
            </p>
          </div>
          <div className="bg-black/60 border-2 border-yellow-500/40 p-3 text-center">
            <Trophy className="w-4 h-4 text-yellow-400 mx-auto mb-2" />
            <p className="text-yellow-400/60 text-[0.45rem] mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>ACCURACY</p>
            <p className="text-xl font-bold text-yellow-300" style={{ fontFamily: "'VT323', monospace", fontSize: '1.8rem' }}>
              {accuracy}%
            </p>
          </div>
        </div>

        {/* Loan History */}
        {result.loanHistory && result.loanHistory.length > 0 && (
          <div className="bg-black/80 border-4 border-purple-500/40 overflow-hidden animate-in fade-in duration-500 delay-200">
            <div className="px-3 sm:px-4 py-3 border-b-2 border-purple-500/20 flex items-center gap-2 bg-purple-500/10">
              <Coins className="w-4 h-4 text-purple-400" />
              <p className="text-purple-300 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}>LOAN HISTORY</p>
            </div>
            <div className="divide-y divide-purple-500/10">
              {result.loanHistory.map((loan, index) => (
                <div key={index} className="flex items-center justify-between px-3 sm:px-4 py-3 hover:bg-purple-500/5">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    {loan.wasOptimal ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                    )}
                    <div className="min-w-0">
                      <p className="text-purple-200 text-xs sm:text-sm truncate" style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}>{loan.borrowerName}</p>
                      <p className="text-purple-500/60 text-xs truncate" style={{ fontFamily: "'VT323', monospace" }}>{loan.type}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${loan.wasOptimal ? 'text-yellow-400' : 'text-purple-400/70'}`} style={{ fontFamily: "'VT323', monospace", fontSize: '1.2rem' }}>
                    {formatCurrency(loan.profit)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flip the Script: The Big Reveal */}
        <div className="bg-black/90 border-4 border-cyan-500/50 overflow-hidden animate-in fade-in duration-500 delay-300">
          <div className="px-4 py-3 border-b-2 border-cyan-500/30 bg-cyan-900/20 flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
            <p className="text-cyan-300 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem' }}>FLIP THE SCRIPT</p>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-cyan-200/90" style={{ fontFamily: "'VT323', monospace", fontSize: '1.15rem' }}>
              You just played as the loan shark. You learned which loans extract the most money from borrowers. Now use that knowledge to protect yourself.
            </p>
            <div className="bg-cyan-900/20 border border-cyan-500/30 p-3">
              <p className="text-yellow-300 font-bold mb-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem' }}>
                THE PREDATORY PLAYBOOK YOU JUST USED:
              </p>
              <div className="space-y-1" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                <p className="text-cyan-200/80">Variable rates → more interest collected when rates rise</p>
                <p className="text-cyan-200/80">Longer terms → more months of interest payments</p>
                <p className="text-cyan-200/80">Low monthly payments → disguise the true total cost</p>
                <p className="text-cyan-200/80">Deferred interest → trap borrowers with retroactive charges</p>
                <p className="text-cyan-200/80">No credit check → signals they expect and plan for default</p>
              </div>
            </div>
          </div>
        </div>

        {/* Red Flag Radar */}
        <div className="bg-black/80 border-4 border-red-500/40 overflow-hidden animate-in fade-in duration-500 delay-350">
          <div className="px-4 py-3 border-b-2 border-red-500/20 bg-red-900/10 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <p className="text-red-300 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem' }}>RED FLAG RADAR</p>
          </div>
          <div className="p-4">
            <p className="text-purple-300/70 mb-3" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
              Memorize these warning signs. Spotting them in real life is your financial superpower:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {redFlagSignatures.map((item, index) => (
                <div key={index} className="bg-red-900/10 border border-red-500/20 p-2">
                  <p className="text-red-300 font-bold" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                    {item.flag}
                  </p>
                  <p className="text-purple-400/60" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
                    {item.warning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What You Learned */}
        <div className="bg-black/80 border-4 border-pink-500/40 overflow-hidden animate-in fade-in duration-500 delay-400">
          <div className="px-4 py-3 border-b-2 border-pink-500/20 flex items-center gap-2 bg-pink-500/10">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <p className="text-pink-300 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}>SCENARIO LESSONS</p>
          </div>
          <div className="p-4 space-y-4">
            {educationalInsights.map((insight, index) => (
              <div key={index} className="border-l-4 border-yellow-500/40 pl-3">
                <p className="text-pink-300 font-bold mb-1" style={{ fontFamily: "'VT323', monospace", fontSize: '1.05rem' }} data-testid={`text-insight-title-${index}`}>
                  {insight.title}
                </p>
                <p className="text-purple-300/70 leading-relaxed" style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }} data-testid={`text-insight-content-${index}`}>
                  {insight.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certified Badge */}
        <div className="bg-black/80 border-4 border-yellow-500/50 p-4 text-center animate-in fade-in duration-500 delay-500">
          <ShieldCheck className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem' }}>
            PREDATORY LENDING CERTIFIED
          </p>
          <p className="text-purple-300/70 mt-2" style={{ fontFamily: "'VT323', monospace", fontSize: '1.05rem' }}>
            You now know more about loans than most adults. Share what you learned — financial literacy is the best weapon against predatory lending.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 animate-in fade-in duration-500 delay-400">
          <button
            onClick={onPlayAgain}
            className="flex-1 h-12 font-bold bg-pink-600 hover:bg-pink-500 text-white border-4 border-pink-400 flex items-center justify-center gap-2 shadow-[0_4px_0_#9d174d] hover:shadow-[0_2px_0_#9d174d] hover:translate-y-0.5 transition-all"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}
            data-testid="button-play-again"
          >
            <RotateCcw className="w-4 h-4" />
            AGAIN
          </button>
          <button
            onClick={onBackToStart}
            className="flex-1 h-12 font-bold bg-transparent hover:bg-purple-500/20 text-purple-300 border-4 border-purple-500/50 flex items-center justify-center gap-2 transition-all"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}
            data-testid="button-back-to-start"
          >
            <Home className="w-4 h-4" />
            MENU
          </button>
        </div>

        {/* Branding */}
        <div className="text-center pt-4">
          <p className="text-purple-500/30 text-xs" style={{ fontFamily: "'VT323', monospace" }}>
            GALACTIC LOAN SHARKS - SECTOR 7G
          </p>
        </div>
      </div>
    </div>
  );
}
