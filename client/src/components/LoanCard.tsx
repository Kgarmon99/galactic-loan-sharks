import { Button } from "@/components/ui/button";
import type { LoanOption } from "@shared/schema";
import { CheckCircle2, XCircle, TrendingUp, DollarSign, Eye, Zap, AlertTriangle, Clock, Percent, Skull, Shield, Target } from "lucide-react";

interface LoanCardProps {
  loan: LoanOption;
  onSelect: (loanId: string) => void;
  isSelected?: boolean;
  feedback?: 'best' | 'good' | 'worst' | null;
  disabled?: boolean;
  showResults?: boolean;
  bestProfit?: number;
  worstProfit?: number;
}

export default function LoanCard({ loan, onSelect, isSelected, feedback, disabled, showResults, bestProfit, worstProfit }: LoanCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (rate: number) => {
    return `${rate.toFixed(1)}%`;
  };

  const getRiskLevel = () => {
    if (loan.apr >= 100) return { level: 'extreme', label: 'PREDATORY', color: 'text-red-400', bgClass: 'arcade-badge-red', score: 100 };
    if (loan.apr >= 30) return { level: 'high', label: 'HIGH RISK', color: 'text-orange-400', bgClass: 'arcade-badge-yellow', score: 75 };
    if (loan.apr >= 15) return { level: 'medium', label: 'MODERATE', color: 'text-yellow-300', bgClass: 'arcade-badge-yellow', score: 50 };
    if (loan.apr >= 8) return { level: 'low', label: 'STANDARD', color: 'text-cyan-300', bgClass: 'arcade-badge-cyan', score: 25 };
    return { level: 'safe', label: 'FAIR', color: 'text-green-400', bgClass: 'arcade-badge-green', score: 10 };
  };

  const risk = getRiskLevel();
  const profitDelta = bestProfit ? bestProfit - loan.profit : 0;
  const profitPercentage = bestProfit ? Math.round((loan.profit / bestProfit) * 100) : 0;

  const getCardStateClass = () => {
    if (isSelected && showResults) {
      if (feedback === 'best') return 'loan-card selected best-choice';
      if (feedback === 'worst') return 'loan-card selected worst-choice';
      return 'loan-card selected';
    }
    if (showResults && feedback === 'best') return 'loan-card best-choice';
    if (showResults && feedback === 'worst') return 'loan-card worst-choice';
    if (disabled && !showResults) return 'loan-card opacity-50 pointer-events-none';
    return 'loan-card card-shimmer';
  };

  return (
    <div 
      className={`${getCardStateClass()} relative`}
      data-testid={`card-loan-${loan.id}`}
    >
      {/* Top feedback banner */}
      {feedback && showResults && (
        <div className={`absolute top-0 left-0 right-0 py-2 px-3 z-10 ${
          feedback === 'best' 
            ? 'bg-gradient-to-r from-green-600 to-green-500' 
            : feedback === 'worst'
            ? 'bg-gradient-to-r from-red-600 to-red-500'
            : 'bg-gradient-to-r from-purple-600 to-purple-500'
        }`}>
          <div className="flex items-center justify-center gap-2">
            {feedback === 'best' && (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="pixel-label text-white">MAX PROFIT!</span>
              </>
            )}
            {feedback === 'worst' && (
              <>
                <XCircle className="w-4 h-4 text-white" />
                <span className="pixel-label text-white">MISSED: {formatCurrency(profitDelta)}</span>
              </>
            )}
            {feedback === 'good' && (
              <span className="pixel-label text-white">DECENT CHOICE</span>
            )}
          </div>
        </div>
      )}

      <div className={`p-5 ${feedback && showResults ? 'pt-12' : ''}`}>
        {/* Header: Loan type + Risk badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm leading-tight mb-1" data-testid={`text-loan-type-${loan.id}`}>
              {loan.type}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`arcade-badge ${risk.bgClass}`}>
                {risk.level === 'extreme' && <Skull className="w-3 h-3" />}
                {risk.level === 'safe' && <Shield className="w-3 h-3" />}
                {risk.label}
              </span>
            </div>
          </div>
        </div>

        {/* Hero: Monthly Payment */}
        <div className="relative mb-4 p-4 rounded-xl bg-gradient-to-br from-cyan-900/40 via-black/60 to-purple-900/30 border border-cyan-500/30">
          <div className="absolute top-2 right-2">
            <Clock className="w-4 h-4 text-cyan-400/60" />
          </div>
          <div className="text-cyan-300/80 text-xs uppercase tracking-wider mb-1 data-label">Monthly Payment</div>
          <div className="text-4xl font-black text-white data-value tracking-tight" data-testid={`text-monthly-payment-${loan.id}`}>
            {formatCurrency(loan.monthlyPayment)}
          </div>
          <div className="text-cyan-200/60 text-sm mt-1">
            for <span className="text-white font-semibold">{loan.termMonths}</span> months
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`stat-box ${loan.apr >= 20 ? 'danger' : ''}`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Percent className="w-3 h-3 text-gray-400" />
              <span className="data-label text-gray-400">APR</span>
            </div>
            <div className={`text-2xl font-bold data-value ${
              loan.apr >= 100 ? 'text-red-400' : 
              loan.apr >= 30 ? 'text-orange-400' : 
              loan.apr >= 15 ? 'text-yellow-300' : 
              'text-white'
            }`} data-testid={`text-apr-${loan.id}`}>
              {formatPercent(loan.apr)}
            </div>
          </div>
          <div className="stat-box">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="data-label text-gray-400">Term</span>
            </div>
            <div className="text-2xl font-bold text-white data-value" data-testid={`text-term-${loan.id}`}>
              {loan.termMonths}<span className="text-sm text-gray-400 ml-1">mo</span>
            </div>
          </div>
        </div>

        {/* Risk Meter (visual) */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="data-label text-gray-400 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Risk Level
            </span>
            <span className={`text-xs font-medium ${risk.color}`}>{risk.score}%</span>
          </div>
          <div className="risk-meter">
            <div 
              className="risk-meter-fill" 
              style={{ width: `${risk.score}%` }}
            />
          </div>
        </div>

        {/* Hidden profit section - revealed after selection */}
        {showResults ? (
          <div className="space-y-3 mb-4 reveal-slide">
            {/* Total Cost */}
            <div className="stat-box">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-yellow-400" />
                  <span className="data-label text-yellow-300">Total Repaid</span>
                </div>
                <span className="text-lg font-bold text-white data-value" data-testid={`text-total-cost-${loan.id}`}>
                  {formatCurrency(loan.totalCost)}
                </span>
              </div>
            </div>

            {/* Profit Box - Highlighted */}
            <div className={`p-4 rounded-xl border-2 ${
              feedback === 'best' 
                ? 'border-green-500 bg-gradient-to-br from-green-900/40 to-black/60 glow-green' 
                : 'border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-black/60'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-sm">YOUR PROFIT</span>
                </div>
                <div className={`text-2xl font-black data-value ${feedback === 'best' ? 'text-green-400 number-pop' : 'text-white'}`} data-testid={`text-profit-${loan.id}`}>
                  {formatCurrency(loan.profit)}
                </div>
              </div>
              
              {/* Profit thermometer */}
              <div className="profit-thermo mt-2">
                <div 
                  className="profit-thermo-fill" 
                  style={{ width: `${profitPercentage}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>0%</span>
                <span className="text-primary font-medium">{profitPercentage}% of max</span>
                <span>100%</span>
              </div>
            </div>

            {feedback === 'best' && (
              <div className="text-center py-2">
                <span className="arcade-badge arcade-badge-green">
                  <Zap className="w-3 h-3" />
                  OPTIMAL EXTRACTION!
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-4 p-3 rounded-lg bg-black/40 border border-gray-700/50 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400 text-sm">Profit revealed after selection</span>
          </div>
        )}

        {/* Fine Print */}
        <div className="mb-4 p-3 rounded-lg bg-red-950/30 border border-red-500/20">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-200/90 leading-relaxed" data-testid={`text-fine-print-${loan.id}`}>
              {loan.finePrint}
            </p>
          </div>
        </div>

        {/* Select Button */}
        <Button
          onClick={() => onSelect(loan.id)}
          disabled={disabled || isSelected}
          className={`w-full h-12 text-sm font-bold uppercase tracking-wider transition-all ${
            isSelected 
              ? 'bg-primary/30 text-primary border-2 border-primary/50' 
              : 'bg-gradient-to-r from-primary to-green-400 text-black hover:from-green-400 hover:to-primary shadow-lg shadow-primary/25'
          }`}
          data-testid={`button-select-loan-${loan.id}`}
        >
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            <span>{isSelected ? 'LOCKED IN' : 'DEPLOY LOAN'}</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
