import GameScreen from '../GameScreen';
import { borrowerScenarios } from '@/lib/gameData';

export default function GameScreenExample() {
  return (
    <GameScreen 
      scenario={borrowerScenarios[0]}
      scenarioNumber={1}
      totalScenarios={6}
      onLoanSelect={(loanId, profit) => console.log('Loan selected:', loanId, 'Profit:', profit)}
      moneybotMood="neutral"
      playerName="Player"
    />
  );
}
