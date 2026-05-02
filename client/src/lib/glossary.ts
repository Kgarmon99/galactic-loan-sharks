export const financialGlossary = {
  APR: {
    term: "APR (Annual Percentage Rate)",
    definition: "The yearly cost of borrowing money expressed as a percentage. A 10% APR means you pay 10% of the loan amount per year in interest. Higher APR = more expensive loan.",
    example: "A $1,000 loan at 10% APR costs $100 in interest per year."
  },
  TERM: {
    term: "Loan Term",
    definition: "How long you have to pay back the loan. A 60-month term means 5 years of payments. Longer terms = lower monthly payments BUT higher total interest paid.",
    example: "A $10,000 loan over 48 months vs 60 months has lower monthly payments on the 60-month option, but you pay more interest overall."
  },
  MONTHLY_PAYMENT: {
    term: "Monthly Payment",
    definition: "How much you owe each month. This is calculated based on the loan amount, APR, and term. More info: Monthly Payment = (Principal × APR ÷ 12) ÷ (1 - (1 + APR ÷ 12)^-Term)",
    example: "A $10,000 loan at 10% APR for 48 months = approximately $253 per month."
  },
  TOTAL_COST: {
    term: "Total Cost (Principal + Interest)",
    definition: "The complete amount you'll pay back. This includes the original loan (principal) plus all the interest. Total Cost = Monthly Payment × Term.",
    example: "If you pay $253/month for 48 months, you pay $253 × 48 = $12,144 total (including interest)."
  },
  DEFERRED_INTEREST: {
    term: "Deferred Interest (The 0% Trap)",
    definition: "An offer like '0% interest for 6 months!' But if you don't pay the FULL balance by the deadline, the store charges you ALL the interest from day one, retroactively. This is why 67% of people get trapped paying the full amount.",
    example: "You buy a $1,200 phone on a 0% for 6 months card. You only pay $200. 6 months later, the store charges you ALL the interest from month 1. You now owe $1,800+."
  },
  COSIGNER: {
    term: "Cosigner",
    definition: "Someone who promises to pay your loan if you can't. The cosigner is legally responsible and any missed payment damages THEIR credit too. Lenders use cosigners when they don't trust the primary borrower.",
    example: "Your parents cosign your student loan. If you default, the bank can sue YOUR PARENTS and damage their credit score."
  },
  FIXED_RATE: {
    term: "Fixed Rate",
    definition: "An interest rate that NEVER changes. You know exactly what you'll pay every month for the entire loan. Safe and predictable.",
    example: "A 5.5% fixed rate loan stays 5.5% for the whole 10-year term."
  },
  VARIABLE_RATE: {
    term: "Variable Rate",
    definition: "An interest rate that can change over time based on market conditions. Starts low but can SKYROCKET, making your monthly payments unpredictable and expensive.",
    example: "A private student loan starts at 8.99% but can jump to 14%+ after 5 years, suddenly increasing your payment from $250 to $400 per month."
  },
  ORIGINATION_FEE: {
    term: "Origination Fee",
    definition: "A fee the lender charges upfront (usually 1-5% of the loan). This gets ADDED to your loan balance, so you pay interest on the fee too!",
    example: "A $10,000 loan with a 4.2% origination fee = $420 added to your balance. You now owe $10,420 and pay interest on ALL of it."
  },
  PAYDAY_LOAN: {
    term: "Payday Loan",
    definition: "A short-term loan (typically 2 weeks) with INSANE fees. A $500 payday loan might cost $75 = 391% APR! If you can't pay the lump sum, you 'roll over' and pay another $75 fee. Designed to trap you.",
    example: "You borrow $500 for 2 weeks and owe $575 ($500 + $75 fee). You can't pay it, so you roll it over. Now you pay $75 AGAIN. After 3 rollovers, you've paid $225 in fees on $500 borrowed."
  },
  CREDIT_SCORE: {
    term: "Credit Score",
    definition: "A number (usually 300-850) that rates your creditworthiness. Higher = better loans and interest rates. Actions like missed payments, maxing out cards, or high debt tank your score.",
    example: "A 750 credit score gets you a 5% car loan. A 600 score might get you 12%. Same car, thousands of dollars more in interest."
  },
  MINIMUM_PAYMENT: {
    term: "Minimum Payment (Credit Card Trap)",
    definition: "The smallest payment your credit card will accept. Paying only the minimum means most of your payment goes to INTEREST, not the principal. You'll pay for YEARS and pay hundreds extra.",
    example: "A $2,500 credit card balance at 23% APR with $75 minimum payments takes 52 months (over 4 years!) and costs $3,900 total. You paid $1,400 just in interest."
  },
  BUY_NOW_PAY_LATER: {
    term: "Buy Now Pay Later (BNPL)",
    definition: "Split a purchase into multiple small payments, usually with 0% interest IF you pay on time. Miss ONE payment? Late fees and credit score damage. Quick and easy, but risky.",
    example: "A $500 phone split into 4 payments of $125 over 6 weeks. 0% interest if paid on time, but miss a payment = $7+ fee + credit damage."
  },
  EMERGENCY_AID: {
    term: "Emergency Student Aid",
    definition: "Funds colleges offer for unexpected expenses. Often FREE grants (not loans!) or 0% loans you repay after graduation. Most students don't know about this. ASK YOUR FINANCIAL AID OFFICE!",
    example: "Your tablet breaks mid-semester. Instead of a payday loan, your college gives you a $500 grant (FREE money) or a 0% loan due after graduation."
  },
  FEDERAL_LOAN: {
    term: "Federal Student Loan",
    definition: "Government loans with fixed rates, income-driven repayment options, and forgiveness programs. Always max these out BEFORE considering private loans.",
    example: "Federal Direct Loan: 5.5% fixed, income-driven repayment if you struggle, forgiveness after 25 years. No prepayment penalty."
  },
  PRIVATE_LOAN: {
    term: "Private Student Loan",
    definition: "Loans from banks, not the government. Higher rates (often variable!), no flexibility, no forgiveness programs, and they require a cosigner. Avoid if possible.",
    example: "Private student loan: starts 8.99% but can climb to 14%+, requires cosigner, no income-driven options, no forgiveness."
  }
};

export type GlossaryKey = keyof typeof financialGlossary;

export const getGlossaryEntry = (key: GlossaryKey) => financialGlossary[key];
