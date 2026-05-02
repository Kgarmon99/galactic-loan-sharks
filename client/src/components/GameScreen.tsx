import { useState, useEffect } from "react";
import type { BorrowerScenario, LoanOption } from "@shared/schema";
import type { Avatar } from "@/lib/avatars";
import { Sparkles, Zap, Coins, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { financialGlossary, type GlossaryKey } from "@/lib/glossary";
import moneybotLogo from "@assets/new-moneybot-logo_1764344834245.png";

const GlossaryTooltip = ({ term, children }: { term: GlossaryKey; children: React.ReactNode }) => {
  const entry = financialGlossary[term];
  if (!entry) return <>{children}</>;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dashed border-yellow-400/50 hover:border-yellow-400 transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" className="max-w-xs bg-black/95 border-2 border-yellow-500 p-3 text-purple-100 z-50">
          <div className="space-y-1">
            <p className="text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem' }}>
              {entry.term}
            </p>
            <p className="text-xs leading-relaxed" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
              {entry.definition}
            </p>
            <p className="text-purple-300/70 text-xs italic mt-2" style={{ fontFamily: "'VT323', monospace", fontSize: '0.85rem' }}>
              {entry.example}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface GameScreenProps {
  scenario: BorrowerScenario;
  scenarioNumber: number;
  totalScenarios: number;
  onLoanSelect: (loanId: string, profit: number) => void;
  playerName: string;
  playerAvatar: Avatar;
  totalProfit: number;
}

type GameStage = 'talking' | 'choosing' | 'result';

export default function GameScreen({
  scenario,
  scenarioNumber,
  totalScenarios,
  onLoanSelect,
  totalProfit,
  playerName,
  playerAvatar,
}: GameScreenProps) {
  const [stage, setStage] = useState<GameStage>('talking');
  const [typedText, setTypedText] = useState('');
  const [selectedLoan, setSelectedLoan] = useState<LoanOption | null>(null);
  const [showProfit, setShowProfit] = useState(false);
  const [borrowerExiting, setBorrowerExiting] = useState(false);
  const [borrowerReactClass, setBorrowerReactClass] = useState('');
  const [intelExpanded, setIntelExpanded] = useState(false);

  useEffect(() => {
    setStage('talking');
    setTypedText('');
    setSelectedLoan(null);
    setShowProfit(false);
    setBorrowerExiting(false);
    setBorrowerReactClass('');
    setIntelExpanded(false);
  }, [scenario.id]);

  useEffect(() => {
    if (stage !== 'talking') return;
    const text = scenario.dialogue;
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setStage('choosing'), 300);
      }
    }, 11);
    return () => clearInterval(timer);
  }, [stage, scenario.dialogue]);

  const handleSkipDialogue = () => {
    if (stage === 'talking') {
      setTypedText(scenario.dialogue);
      setStage('choosing');
    }
  };

  const handleLoanSelect = (loan: LoanOption) => {
    if (selectedLoan) return;
    setSelectedLoan(loan);
    setStage('result');
    setIntelExpanded(false);
    setBorrowerReactClass(loan.redFlags.length > 0 ? 'borrower-trapped' : 'borrower-relieved');
    setTimeout(() => setShowProfit(true), 150);
  };

  const handleContinue = () => {
    if (selectedLoan && !borrowerExiting) {
      setBorrowerExiting(true);
      setBorrowerReactClass('');
      setTimeout(() => onLoanSelect(selectedLoan.id, selectedLoan.profit), 480);
    }
  };

  const getBestProfit = () => Math.max(...scenario.loanOptions.map(l => l.profit));
  const isOptimal = selectedLoan?.profit === getBestProfit();

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

  const getSharkReaction = () => {
    if (!showProfit || !selectedLoan) return null;
    const ratio = selectedLoan.profit / getBestProfit();
    if (ratio === 1) {
      return ["PERFECT HIT! Maximum extraction!", "That's how a REAL shark operates!", "Excellent. Their desperation = our profit.", "You're a natural predator, kid."][scenarioNumber % 4];
    } else if (ratio > 0.5) {
      return ["Decent... but you left credits on the table.", "Meh. Could've squeezed more out of them.", "Not terrible, but not great either."][scenarioNumber % 3];
    } else {
      return ["Are you trying to HELP them?! We're SHARKS!", "That was almost... FAIR. Disgusting.", "You just gave them the best deal?! WHY?!"][scenarioNumber % 3];
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0612] overflow-hidden relative scanlines">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '8px 8px'
      }} />

      {/* Header */}
      <header className="relative z-20 bg-black/70 border-b-4 border-purple-500/30">
        <div className="h-1.5 bg-purple-900/50 w-full">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-300 progress-bar-fill"
            style={{ width: `${((scenarioNumber - 1) / totalScenarios) * 100}%` }}
          />
        </div>
        <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img src={moneybotLogo} alt="MoneyBot" className="w-7 h-7 sm:w-9 sm:h-9 object-contain flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-purple-400/80 leading-none" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.38rem' }}>
                VICTIM {scenarioNumber} OF {totalScenarios}
              </p>
              <div className="hidden sm:flex items-center gap-1 mt-1.5">
                {Array.from({ length: totalScenarios }, (_, i) => (
                  <div key={i} className={`h-1.5 rounded-sm transition-all duration-500 ${
                    i < scenarioNumber - 1 ? 'w-4 bg-yellow-400' : i === scenarioNumber - 1 ? 'w-4 bg-pink-400 animate-pulse' : 'w-3 bg-purple-800'
                  }`} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black/70 border-4 border-yellow-500/60 px-3 py-1.5 flex-shrink-0">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem' }} data-testid="text-total-profit">
              {formatCurrency(totalProfit)}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6 min-h-[calc(100vh-80px)] relative z-10">
        <div className="w-full max-w-3xl">

          {/* Characters */}
          <div className="flex flex-row items-end justify-center gap-4 sm:gap-16 mb-3 sm:mb-6 min-h-[110px] sm:min-h-[160px]">

            {/* Player */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className={`relative ${showProfit ? (isOptimal ? 'moneybot-happy' : 'moneybot-sad') : 'moneybot-idle'}`}>
                <div className={`absolute inset-0 blur-[30px] ${playerAvatar.glowClass}`} />
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${playerAvatar.bgClass} border-4 ${playerAvatar.borderClass} flex items-center justify-center relative overflow-hidden`} data-testid="img-player-avatar">
                  <img src={playerAvatar.imageUrl} alt={playerAvatar.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                </div>
              </div>
              <p className={`mt-1 font-bold ${playerAvatar.color}`} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem' }}>{playerName.toUpperCase()}</p>
              <p className="text-purple-400/60" style={{ fontFamily: "'VT323', monospace", fontSize: '0.85rem' }}>LOAN SHARK</p>
            </div>

            {/* Borrower */}
            <div className={`flex flex-col items-center flex-shrink-0 ${borrowerExiting ? 'borrower-walk-out' : borrowerReactClass || ''}`}>
              <div className={`border-4 border-purple-500/50 p-1 bg-black/50 ${!borrowerReactClass && !borrowerExiting ? 'borrower-idle' : ''}`}>
                <img
                  src={scenario.image}
                  alt={scenario.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  style={{ imageRendering: 'pixelated' }}
                  data-testid="img-borrower"
                />
              </div>
              <p className="mt-1 text-purple-300 font-bold" style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }} data-testid="text-borrower-name">
                {scenario.name}
              </p>
              <p className="text-purple-400/60 text-center max-w-[120px] sm:max-w-[180px]" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
                {scenario.scenario}
              </p>
            </div>
          </div>

          {/* Dialogue Box */}
          {(stage === 'talking' || stage === 'choosing') && !selectedLoan && (
            <div
              className={`bg-black/90 border-4 border-purple-500/60 p-3 sm:p-5 mb-4 sm:mb-5 ${stage === 'talking' ? 'cursor-pointer select-none' : ''}`}
              onClick={handleSkipDialogue}
              data-testid="dialogue-box"
            >
              <div className="flex items-center gap-3 mb-3 pb-3 border-b-2 border-purple-500/20">
                <div className="w-10 h-10 border-2 border-purple-500/50 flex-shrink-0 overflow-hidden">
                  <img src={scenario.image} alt={scenario.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-pink-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem' }}>{scenario.name.toUpperCase()}</p>
                  <p className="text-purple-400/60 truncate" style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }}>{scenario.scenario}</p>
                </div>
                {stage === 'talking' && (
                  <span className="flex-shrink-0 text-purple-500/50 animate-pulse" style={{ fontFamily: "'VT323', monospace", fontSize: '0.85rem' }}>
                    [tap to skip]
                  </span>
                )}
              </div>
              <div className="max-h-[140px] overflow-y-auto">
                <p className="text-purple-100 leading-relaxed" style={{ fontFamily: "'VT323', monospace", fontSize: '1.25rem' }}>
                  "{typedText}"
                  {stage === 'talking' && <span className="inline-block w-2 h-4 bg-pink-500 ml-1 animate-pulse" />}
                </p>
              </div>
              {stage === 'choosing' && (
                <div className="flex items-center justify-between text-purple-400/50 pt-3 mt-1 border-t-2 border-purple-500/20">
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }}>Pick a loan to offer them...</span>
                  <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                </div>
              )}
            </div>
          )}

          {/* Result */}
          {showProfit && selectedLoan && (
            <div className="space-y-3 mb-6" data-testid="result-message">

              {/* Score Banner */}
              <div className={`p-3 sm:p-4 text-center border-4 ${isOptimal ? 'bg-yellow-500/10 border-yellow-500/60' : 'bg-pink-500/10 border-pink-500/40'}`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {isOptimal ? (
                    <>
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                      <p className="text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.6rem' }}>MAX PROFIT!</p>
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-pink-400" />
                      <p className="text-pink-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}>CREDITS LOST!</p>
                    </>
                  )}
                </div>
                <p className="profit-pop text-yellow-400 font-black" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '1.5rem' }} data-testid="text-profit-earned">
                  +{formatCurrency(selectedLoan.profit)}
                </p>
                <p className={`mt-2 italic ${isOptimal ? 'text-yellow-400/70' : 'text-pink-400/60'}`} style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                  "{getSharkReaction()}"
                </p>
              </div>

              {/* Borrower Reaction */}
              <div className="reaction-bubble-in bg-black/80 border-2 border-purple-500/40 p-3" data-testid="educational-feedback">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 border-2 border-purple-500/50 overflow-hidden bg-black/50">
                    <img src={scenario.image} alt={scenario.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-purple-400/60 mb-1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem' }}>
                      {scenario.name.toUpperCase()} THINKS:
                    </p>
                    <p className={`italic leading-snug ${selectedLoan.redFlags.length > 0 ? 'text-orange-300/90' : 'text-green-300/90'}`} style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}>
                      "{selectedLoan.borrowerReaction}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Transaction Receipt */}
              <div className="receipt-in bg-black/70 border-2 border-purple-500/30 p-3">
                <p className="text-purple-400/50 mb-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem' }}>TRANSACTION LOG:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontFamily: "'VT323', monospace", fontSize: '1.05rem' }}>
                  <span className="text-purple-300/80">
                    Borrowed: <span className="text-white">{formatCurrency(selectedLoan.totalCost - selectedLoan.profit)}</span>
                  </span>
                  <span className="text-purple-400/40">+</span>
                  <span className="text-purple-300/80">
                    Interest: <span className="text-red-400">{formatCurrency(selectedLoan.profit)}</span>
                  </span>
                  <span className="text-purple-400/40">=</span>
                  <span className="text-purple-300/80">
                    They pay: <span className="text-yellow-300 font-bold">{formatCurrency(selectedLoan.totalCost)}</span>
                  </span>
                </div>
                {selectedLoan.termMonths > 1 && (
                  <p className="text-purple-400/40 mt-1" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
                    {formatCurrency(selectedLoan.monthlyPayment)}/mo × {selectedLoan.termMonths} months
                    {selectedLoan.termMonths >= 12 && ` (${(selectedLoan.termMonths / 12).toFixed(1)} yrs)`}
                  </p>
                )}
              </div>

              {/* Red Flags */}
              {selectedLoan.redFlags.length > 0 && (
                <div className="receipt-in flex flex-wrap gap-1.5" style={{ animationDelay: '0.2s' }}>
                  {selectedLoan.redFlags.slice(0, 3).map((flag, i) => (
                    <span key={i} className="flex items-center gap-1 bg-red-900/30 border border-red-500/40 px-2 py-1">
                      <AlertTriangle className="w-2.5 h-2.5 text-red-400 flex-shrink-0" />
                      <span className="text-red-300/90" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>{flag}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Shark Intel — collapsible tip */}
              <div className="receipt-in" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={() => setIntelExpanded(!intelExpanded)}
                  className={`w-full flex items-center justify-between px-3 py-2 border-2 transition-all ${
                    intelExpanded ? 'bg-cyan-900/30 border-cyan-500/50' : 'bg-black/50 border-purple-500/30 hover:border-cyan-500/40'
                  }`}
                  data-testid="button-shark-intel"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-cyan-300 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.38rem' }}>SHARK INTEL</span>
                  </div>
                  <span className="text-purple-400/60" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                    {intelExpanded ? '▲ HIDE' : '▼ SHOW'}
                  </span>
                </button>
                {intelExpanded && (
                  <div className="bg-cyan-900/10 border-2 border-cyan-500/30 border-t-0 p-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-cyan-200/90 leading-relaxed" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                        {selectedLoan.borrowerTip}
                      </p>
                    </div>
                    <p className="text-purple-400/60 italic" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
                      Real world: {selectedLoan.realWorldEquivalent}
                    </p>
                    {!isOptimal && (
                      <p className="text-yellow-400/70" style={{ fontFamily: "'VT323', monospace", fontSize: '0.9rem' }}>
                        Max profit loan: {scenario.loanOptions.find(l => l.profit === getBestProfit())?.type} (+{formatCurrency(getBestProfit())})
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Continue */}
              <button
                onClick={handleContinue}
                className="w-full h-12 font-bold bg-yellow-500 hover:bg-yellow-400 text-black border-4 border-yellow-300 flex items-center justify-center gap-2 shadow-[0_4px_0_#a16207] hover:shadow-[0_2px_0_#a16207] hover:translate-y-0.5 transition-all uppercase"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem' }}
                data-testid="button-continue"
              >
                {scenarioNumber < totalScenarios ? 'NEXT VICTIM' : 'SEE RESULTS'}
              </button>
            </div>
          )}

          {/* Loan Cards */}
          {stage === 'choosing' && !selectedLoan && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {scenario.loanOptions.map((loan, index) => (
                <button
                  key={loan.id}
                  onClick={() => handleLoanSelect(loan)}
                  className="card-stagger-in text-left border-4 border-purple-500/40 bg-black/60 p-4 hover:border-yellow-400 hover:bg-yellow-500/5 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all group"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  data-testid={`button-loan-${loan.id}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-pink-400 font-bold leading-tight" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.42rem' }}>
                      {loan.type}
                    </p>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <GlossaryTooltip term="apr">
                        <span className="text-purple-400/70" style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }}>APR</span>
                      </GlossaryTooltip>
                      <span className="text-white font-bold" style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}>
                        {loan.apr === 0 ? '0%' : `${loan.apr}%`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <GlossaryTooltip term="monthly">
                        <span className="text-purple-400/70" style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }}>Monthly</span>
                      </GlossaryTooltip>
                      <span className="text-white font-bold" style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}>
                        {formatCurrency(loan.monthlyPayment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <GlossaryTooltip term="term">
                        <span className="text-purple-400/70" style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem' }}>Term</span>
                      </GlossaryTooltip>
                      <span className="text-white font-bold" style={{ fontFamily: "'VT323', monospace", fontSize: '1.1rem' }}>
                        {loan.termMonths} mo
                      </span>
                    </div>
                  </div>

                  <p className="text-purple-400/50 leading-snug mb-3" style={{ fontFamily: "'VT323', monospace", fontSize: '0.88rem' }}>
                    {loan.finePrint}
                  </p>

                  <div className="text-yellow-400/0 group-hover:text-yellow-400/80 transition-colors text-center border-t-2 border-purple-500/20 group-hover:border-yellow-500/30 pt-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem' }}>
                    ▶ OFFER THIS LOAN
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
