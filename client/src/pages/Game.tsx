import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import GameScreen from "@/components/GameScreen";
import ResultsScreen from "@/components/ResultsScreen";
import RotationOverlay from "@/components/RotationOverlay";
import InfoModal from "@/components/InfoModal";
import { borrowerScenarios } from "@/lib/gameData";
import { avatars, type Avatar } from "@/lib/avatars";
import type { GamePhase, GameResult } from "@shared/schema";

export default function Game() {
  const [phase, setPhase] = useState<GamePhase>('start');
  const [playerName, setPlayerName] = useState('');
  const [playerAvatar, setPlayerAvatar] = useState<Avatar>(avatars[0]);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [loanHistory, setLoanHistory] = useState<Array<{ borrowerName: string; profit: number; type: string; wasOptimal: boolean }>>([]);

  const handleStart = (name: string, avatar: Avatar) => {
    setPlayerName(name);
    setPlayerAvatar(avatar);
    setPhase('playing');
    setCurrentScenarioIndex(0);
    setTotalProfit(0);
    setLoanHistory([]);
  };

  const handleLoanSelect = (loanId: string, profit: number) => {
    const currentScenario = borrowerScenarios[currentScenarioIndex];
    const selectedLoan = currentScenario.loanOptions.find(l => l.id === loanId);
    const maxProfit = Math.max(...currentScenario.loanOptions.map(l => l.profit));
    const wasOptimal = profit === maxProfit;

    if (selectedLoan) {
      setLoanHistory(prev => [...prev, {
        borrowerName: currentScenario.name,
        profit,
        type: selectedLoan.type,
        wasOptimal
      }]);
    }

    const newTotalProfit = totalProfit + profit;
    setTotalProfit(newTotalProfit);

    if (currentScenarioIndex < borrowerScenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    } else {
      setPhase('results');
    }
  };

  const resetGame = () => {
    setCurrentScenarioIndex(0);
    setTotalProfit(0);
    setLoanHistory([]);
  };

  const handlePlayAgain = () => {
    resetGame();
    setPhase('playing');
  };

  const handleBackToStart = () => {
    resetGame();
    setPlayerName('');
    setPhase('start');
  };

  const getGameResult = (): GameResult => {
    const shadiestLoan = loanHistory.reduce(
      (max, loan) => loan.profit > max.profit ? loan : max,
      loanHistory[0] || { borrowerName: '', profit: 0, type: '' }
    );
    const optimalChoices = loanHistory.filter(l => l.wasOptimal).length;
    return {
      totalProfit,
      loansIssued: loanHistory.length,
      averageProfit: loanHistory.length > 0 ? totalProfit / loanHistory.length : 0,
      shadiestLoan,
      optimalChoices,
      loanHistory
    };
  };

  return (
    <div className="relative">
      <RotationOverlay />
      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />

      {phase === 'start' && (
        <WelcomeScreen
          onStart={handleStart}
          onInfoClick={() => setShowInfo(true)}
        />
      )}

      {phase === 'playing' && (
        <GameScreen
          scenario={borrowerScenarios[currentScenarioIndex]}
          scenarioNumber={currentScenarioIndex + 1}
          totalScenarios={borrowerScenarios.length}
          onLoanSelect={handleLoanSelect}
          playerName={playerName}
          playerAvatar={playerAvatar}
          totalProfit={totalProfit}
        />
      )}

      {phase === 'results' && (
        <ResultsScreen
          result={getGameResult()}
          playerName={playerName}
          playerAvatar={playerAvatar}
          onPlayAgain={handlePlayAgain}
          onBackToStart={handleBackToStart}
        />
      )}
    </div>
  );
}
