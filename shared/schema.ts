import { z } from "zod";

// Game data schemas
export const loanOptionSchema = z.object({
  id: z.string(),
  type: z.string(),
  monthlyPayment: z.number(),
  apr: z.number(),
  termMonths: z.number(),
  totalCost: z.number(),
  finePrint: z.string(),
  profit: z.number(),
  redFlags: z.array(z.string()),
  borrowerTip: z.string(),
  realWorldEquivalent: z.string(),
  borrowerReaction: z.string(),
});

export const borrowerScenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  scenario: z.string(),
  dialogue: z.string(),
  loanOptions: z.array(loanOptionSchema),
});

export const loanHistoryItemSchema = z.object({
  borrowerName: z.string(),
  profit: z.number(),
  type: z.string(),
  wasOptimal: z.boolean(),
});

export const gameResultSchema = z.object({
  totalProfit: z.number(),
  loansIssued: z.number(),
  averageProfit: z.number(),
  shadiestLoan: z.object({
    borrowerName: z.string(),
    profit: z.number(),
    type: z.string(),
  }),
  optimalChoices: z.number().optional(),
  loanHistory: z.array(loanHistoryItemSchema).optional(),
});

export type LoanOption = z.infer<typeof loanOptionSchema>;
export type BorrowerScenario = z.infer<typeof borrowerScenarioSchema>;
export type GameResult = z.infer<typeof gameResultSchema>;
export type LoanHistoryItem = z.infer<typeof loanHistoryItemSchema>;

// Game state
export type GamePhase = 'start' | 'playing' | 'results';
export type MoneybotMood = 'neutral' | 'happy' | 'disappointed';
