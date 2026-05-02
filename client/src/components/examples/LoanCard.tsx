import LoanCard from '../LoanCard';
import type { LoanOption } from '@shared/schema';

const sampleLoan: LoanOption = {
  id: "sample-1",
  type: "Standard Auto Loan",
  monthlyPayment: 450,
  apr: 6.5,
  termMonths: 48,
  totalCost: 21600,
  finePrint: "Fixed rate, no prepayment penalty",
  profit: 1600
};

export default function LoanCardExample() {
  return (
    <div className="p-8 max-w-sm bg-background">
      <LoanCard 
        loan={sampleLoan}
        onSelect={(id) => console.log('Selected loan:', id)}
        showResults={false}
        bestProfit={5000}
      />
    </div>
  );
}
