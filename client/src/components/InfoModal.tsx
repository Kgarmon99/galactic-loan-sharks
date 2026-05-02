import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { educationalInsights } from "@/lib/gameData";
import { Target, Lightbulb, X, DollarSign, TrendingUp, AlertTriangle, Shield } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto bg-[#0a120a] border border-emerald-500/20 p-0 rounded-2xl" data-testid="dialog-info">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold moneyverse-title flex items-center gap-2" data-testid="text-info-title">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              About MoneyVerse
            </DialogTitle>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="p-6 pt-4 space-y-6">
          {/* How to Play */}
          <div className="moneyverse-card p-4">
            <h3 className="flex items-center gap-2 text-emerald-300 font-medium mb-3">
              <Target className="w-4 h-4 text-emerald-500" />
              How to Play
            </h3>
            <div className="space-y-2 text-sm text-emerald-400/70">
              <p>You're a loan officer in the MoneyVerse. Customers come to you desperately needing money.</p>
              <p>Your job is to pick the loan that makes <span className="text-yellow-400 font-medium">you</span> the most profit - not what's best for them.</p>
              <p>After each choice, you'll see if you picked the most profitable option.</p>
            </div>
          </div>

          {/* Strategy Tips */}
          <div className="moneyverse-card p-4">
            <h3 className="flex items-center gap-2 text-emerald-300 font-medium mb-3">
              <TrendingUp className="w-4 h-4 text-yellow-500" />
              Lending Strategy
            </h3>
            <ul className="space-y-2 text-sm text-emerald-400/70">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">$</span>
                <span>Lower monthly payments often mean longer terms = more profit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">$</span>
                <span>Higher APR = more interest collected over time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">$</span>
                <span>Read the fine print - it hints at hidden fees and costs</span>
              </li>
            </ul>
          </div>

          {/* Educational Purpose */}
          <div className="moneyverse-card-gold p-4">
            <h3 className="flex items-center gap-2 text-yellow-400 font-medium mb-2">
              <Shield className="w-4 h-4" />
              Why This Game?
            </h3>
            <p className="text-sm text-emerald-400/70 leading-relaxed">
              By playing as the lender, you'll understand how predatory lending works - so you can protect yourself and others in real life.
            </p>
          </div>

          {/* Key Concepts */}
          <div>
            <h3 className="flex items-center gap-2 text-emerald-300 font-medium mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              Predatory Lending Tactics
            </h3>
            <div className="space-y-3">
              {educationalInsights.slice(0, 4).map((insight, index) => (
                <div key={index} className="border-l-2 border-emerald-500/30 pl-3">
                  <p className="text-sm text-emerald-300 font-medium" data-testid={`text-modal-insight-title-${index}`}>
                    {insight.title}
                  </p>
                  <p className="text-xs text-emerald-600 mt-0.5" data-testid={`text-modal-insight-content-${index}`}>
                    {insight.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-orange-300/80 leading-relaxed">
              This game is for educational purposes only. The tactics shown are real predatory lending practices that harm millions of borrowers each year.
            </p>
          </div>

          {/* Credits */}
          <div className="pt-4 border-t border-emerald-500/10 text-center">
            <p className="text-xs text-emerald-600">
              Inspired by the Shady Sam educational game
            </p>
            <p className="text-xs text-emerald-500/30 mt-1 tracking-widest uppercase">
              MoneyVerse by Moneybot
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
