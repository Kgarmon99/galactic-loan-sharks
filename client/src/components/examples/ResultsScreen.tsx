import ResultsScreen from '../ResultsScreen';
import type { GameResult } from '@shared/schema';

const sampleResult: GameResult = {
  totalProfit: 42500,
  loansIssued: 6,
  averageProfit: 7083,
  shadiestLoan: {
    borrowerName: "The Johnsons",
    profit: 350000,
    type: "Adjustable Rate Mortgage (ARM)"
  }
};

export default function ResultsScreenExample() {
  return (
    <ResultsScreen 
      result={sampleResult}
      playerName="Alex"
      onPlayAgain={() => console.log('Play again clicked')}
      onBackToStart={() => console.log('Back to start clicked')}
    />
  );
}
