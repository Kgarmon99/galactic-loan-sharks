import type { BorrowerScenario } from "@shared/schema";

export const borrowerScenarios: BorrowerScenario[] = [
  {
    id: "1",
    name: "Zyx'thor the Graduate",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=zyx&backgroundColor=7c3aed&baseColor=22c55e",
    scenario: "Zorblaxian student heading to Galactic University - needs 20,000 credits",
    dialogue: "I just got accepted to Galactic University! My dream school! Tuition is 25,000 credits per cycle, and I need to figure out how to pay for it. My spawning-units (parents) can help a little, but I need to borrow about 20,000 credits for my first year. Everyone keeps talking about 'federal vs private' loans and I'm like... I just want to study Quantum Biology, not become a finance expert. What's the difference anyway? A loan is a loan, right? ...Right?",
    loanOptions: [
      {
        id: "1a",
        type: "Federal Direct Loan",
        monthlyPayment: 218,
        apr: 5.5,
        termMonths: 120,
        totalCost: 26160,
        finePrint: "Fixed rate guaranteed. Income-driven repayment if you struggle. Loan forgiveness programs available. Can pause payments during hardship. No payments while in school.",
        profit: 6160,
        redFlags: [],
        borrowerTip: "Always exhaust federal student loans FIRST. They have income-driven repayment, forgiveness programs, and deferment options no private loan can match. This is the responsible choice.",
        realWorldEquivalent: "You'll pay $6,160 in interest over 10 years — about $51/month. That's a fair price for $20,000 in education funding with full borrower protections.",
        borrowerReaction: "Fixed rate and income-based repayment options? So if I can't find a job right away... I'm not completely trapped. That's actually reassuring."
      },
      {
        id: "1b",
        type: "Private Student Loan",
        monthlyPayment: 253,
        apr: 8.99,
        termMonths: 120,
        totalCost: 30360,
        finePrint: "Variable rate starts at 8.99% but can climb to 14%+. Requires a cosigner. No income-based options. No forgiveness programs. May require payments while in school.",
        profit: 10360,
        redFlags: [
          "Variable rate can legally climb from 8.99% to 14%+ — lenders can raise it anytime",
          "No income-driven repayment: lose your job = still must pay full amount",
          "No loan forgiveness programs — ever, under any circumstances",
          "Cosigner's credit is destroyed if you miss even one payment"
        ],
        borrowerTip: "NEVER take private loans before exhausting ALL federal options. At 14% APR, your $20K loan could cost $37,000+ over 10 years. Private loans are the #1 cause of student debt crises.",
        realWorldEquivalent: "At 14% APR, you'd pay $18,000+ in interest — nearly as much as what you borrowed. Federal loans cost $6,160 in interest. That's a $12,000 difference for identical money.",
        borrowerReaction: "Wait — the rate can go UP after I sign? And if I lose my job I still have to pay? And my parents are on the hook... I didn't fully read this, did I."
      },
      {
        id: "1c",
        type: "Parent PLUS Loan",
        monthlyPayment: 248,
        apr: 7.54,
        termMonths: 120,
        totalCost: 29760,
        finePrint: "Federal loan but higher rate. Parents are legally responsible - if you can't pay, they must. Includes 4.2% origination fee ($845) added to your balance upfront.",
        profit: 9760,
        redFlags: [
          "4.2% origination fee adds $845 to your debt before you spend a single credit",
          "Parents are legally on the hook — if you default, it destroys THEIR retirement credit",
          "Higher rate than regular federal Direct Loans despite being the same federal program"
        ],
        borrowerTip: "If parents must borrow, compare PLUS loan rates to their other options first. The $845 origination fee is charged BEFORE you receive any money — you're already in the hole.",
        realWorldEquivalent: "That $845 origination fee alone could pay for 3 months of textbooks, 2 months of groceries, or a semester of transportation costs — and it's added before you see a single credit.",
        borrowerReaction: "My parents signed this too. If I can't pay... it comes back on them. I didn't really think about what that means for their retirement."
      }
    ]
  },
  {
    id: "2",
    name: "Kira Stellanova",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=kira&backgroundColor=ec4899&baseColor=06b6d4",
    scenario: "Nebulite teen buying her first hover-pod - needs 10,000 credits",
    dialogue: "I finally saved up 2,000 credits from my part-time job at the Nebula Cafe! I found a used hover-pod for 12,000 credits - it's not fancy but it runs. The dealer says my 2K can be a down payment, so I need to borrow 10,000 credits. My credit history is basically 'what credit history?' so the rates aren't great. The dealer keeps pushing me toward THEIR financing because it's 'so easy!' But my spawning-unit said dealers sometimes mark up rates? I don't know what that means but it sounds bad.",
    loanOptions: [
      {
        id: "2a",
        type: "Credit Union Auto Loan",
        monthlyPayment: 243,
        apr: 7.9,
        termMonths: 48,
        totalCost: 11664,
        finePrint: "Requires credit union membership ($25 to join). Best rates for first-time buyers. Get pre-approved BEFORE visiting dealers - you'll have negotiating power.",
        profit: 1664,
        redFlags: [],
        borrowerTip: "Get pre-approved by a credit union BEFORE visiting any dealership. You become a 'cash buyer' — dealers can't hide profits in financing when you already have a rate locked in.",
        realWorldEquivalent: "You'll pay $1,664 in interest over 4 years — about $35/month in interest. That's reasonable for a first auto loan with no credit history.",
        borrowerReaction: "Fixed rate, 4 years and it's mine. I should've come here before going to the dealer. That $25 membership is nothing compared to what I'm saving."
      },
      {
        id: "2b",
        type: "Dealer Financing",
        monthlyPayment: 227,
        apr: 12.9,
        termMonths: 60,
        totalCost: 13620,
        finePrint: "Lower monthly payment but 12 extra months of paying. Dealers often mark up the rate 2-3% and pocket the difference. You'll owe more than the car is worth for years.",
        profit: 3620,
        redFlags: [
          "Dealers can legally mark up your rate 2-3% above the bank's offer and keep the difference",
          "60-month term means you'll owe MORE than the car is worth for years ('upside down')",
          "Low monthly payment tricks you into paying 12 more months — that's a year of extra payments"
        ],
        borrowerTip: "If using dealer financing, ALWAYS negotiate on total purchase PRICE, not monthly payment. Dealers profit by stretching loan terms. A longer term always means paying more total.",
        realWorldEquivalent: "You'll pay $1,956 MORE than with the credit union — for the exact same car. That's enough for a new phone, a laptop, or 2 months of rent just in extra interest.",
        borrowerReaction: "Five years... the car could break down before I'm done paying for it. And I'll owe more than it's worth for most of that. I should've negotiated harder on the price."
      },
      {
        id: "2c",
        type: "Buy Here Pay Here Lot",
        monthlyPayment: 287,
        apr: 23.9,
        termMonths: 60,
        totalCost: 17220,
        finePrint: "No credit check! GPS tracker on car. Miss ONE payment = instant repo. Half of these loans end in repossession. They profit by selling the same car over and over.",
        profit: 7220,
        redFlags: [
          "23.9% APR — credit card-level rates on a rapidly depreciating car",
          "GPS tracker allows instant repossession with no warning and no court process",
          "Over 50% of Buy Here Pay Here loans end in repossession — this IS their business model",
          "'No credit check' means they EXPECT you to default and plan to profit from it"
        ],
        borrowerTip: "BHPH lots profit from repossessions. They sell the SAME car to multiple people. If your credit is too low for normal loans, buy the cheapest reliable car you can pay cash for instead.",
        realWorldEquivalent: "You'll pay $7,220 in interest — that's 72% of what you borrowed! A $4,000 used car bought with cash would've been cheaper and you'd own it free and clear.",
        borrowerReaction: "GPS tracker?! Miss ONE payment and they just... take it? Without warning? I need this car to get to work. If they repo it, I lose my job too."
      }
    ]
  },
  {
    id: "3",
    name: "Blip-9",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=blip9&backgroundColor=14b8a6&baseColor=a855f7",
    scenario: "Android student needs a new DataPad - costs 1,200 credits",
    dialogue: "SYSTEM ALERT: My old DataPad finally crashed. I need it for school, work schedules, everything! The new QuantumPhone X costs 1,200 credits. My job at the space station food court pays 600 credits monthly. The store has all these payment plans with confusing names. One says 'Interest-free!' but there's tiny text with other stuff. Another is only 50 credits per month which seems amazing? Help my processors compute the optimal solution!",
    loanOptions: [
      {
        id: "3a",
        type: "Save Up & Pay Cash",
        monthlyPayment: 600,
        apr: 0,
        termMonths: 2,
        totalCost: 1200,
        finePrint: "Wait 2 months while saving. No interest, no contracts, no strings attached. You own it outright and can switch carriers or sell it whenever you want.",
        profit: 0,
        redFlags: [],
        borrowerTip: "Waiting 2 months for an electronics purchase is almost always the right move. The phone will still exist, your bank account won't have a hole in it, and you own it free and clear.",
        realWorldEquivalent: "Zero interest. Zero debt. Zero contracts. The phone costs exactly $1,200. This is what winning at personal finance looks like — it's boring and it works.",
        borrowerReaction: "Wait... just two months? I could borrow a friend's tablet for classwork and just save up. That's it. That's the whole answer. Why didn't I think of that?"
      },
      {
        id: "3b",
        type: "Carrier 24-Month Plan",
        monthlyPayment: 50,
        apr: 0,
        termMonths: 24,
        totalCost: 1200,
        finePrint: "True 0% interest! BUT: Locked to that carrier for 24 months. Want to switch? Pay remaining balance in full immediately. Break or lose phone = still owe full amount.",
        profit: 0,
        redFlags: [
          "Locked to one carrier for 24 months — switching means paying full remaining balance immediately",
          "If you break or lose the phone, you still owe every remaining payment",
          "Not ideal if you want carrier flexibility or move to a different coverage area"
        ],
        borrowerTip: "True 0% carrier plans are actually fair — just understand the lock-in. Only choose this if you're confident in staying with that carrier for 2 full years.",
        realWorldEquivalent: "At 0% interest, the $1,200 phone costs $1,200. Exactly what things should cost. The only risk is the carrier lock-in — read those terms carefully.",
        borrowerReaction: "No interest, but stuck with this carrier for 2 years. I just need to make sure the coverage is good where I live. And... not drop this phone."
      },
      {
        id: "3c",
        type: "Store Credit Card",
        monthlyPayment: 50,
        apr: 29.99,
        termMonths: 36,
        totalCost: 1800,
        finePrint: "'0% for 6 months IF paid in full!' But 67% of people don't pay in time. Miss deadline by 1 day = 29.99% APR applied retroactively. At $50/month it takes 3 years!",
        profit: 600,
        redFlags: [
          "Deferred interest: missing the '0% deadline' by ONE DAY charges full 29.99% APR from Day 1",
          "67% of customers fail to pay off in time — lenders COUNT on this to make their profits",
          "At minimum payments it takes 3 YEARS to pay off a phone you need for 2",
          "29.99% APR is one of the highest rates legally allowed"
        ],
        borrowerTip: "Deferred interest is the #1 retail financing trap. The lender BETS you won't pay in time. Set a reminder one month before the deadline — or better yet, avoid deferred interest entirely.",
        realWorldEquivalent: "That $1,200 phone costs $1,800 at minimum payments over 3 years. For $600 extra, you could have bought a second phone. Set calendar alerts or just don't do it.",
        borrowerReaction: "Three years?! I'll be paying for this phone long after I need to replace it. And if I miss the 6-month deadline by even one day, the interest hits ALL at once from the start?"
      }
    ]
  },
  {
    id: "4",
    name: "The Glorblings",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=glorbax&backgroundColor=6366f1&baseColor=f59e0b",
    scenario: "Plutonian roommates need 2,500 credits for apartment move-in",
    dialogue: "Me and my best friend Glorb are finally moving out of our parents' domes! We found a two-pod unit for 1,500 credits monthly. But wait - they want first month, last month, AND security deposit? That's 4,500 credits upfront! We have 2,000 saved between us. We both have part-time jobs making 800 each. We just need 2,500 credits to make this work. Everyone says 'just put it on a credit card' but that sounds sketchy?",
    loanOptions: [
      {
        id: "4a",
        type: "Personal Loan from Credit Union",
        monthlyPayment: 220,
        apr: 10.9,
        termMonths: 12,
        totalCost: 2640,
        finePrint: "Fixed payment for 1 year. Reports to credit bureaus, building your credit history. No prepayment penalty - pay it off faster if you can. Best option here.",
        profit: 140,
        redFlags: [],
        borrowerTip: "When you need to borrow for a necessary expense, a credit union personal loan is the responsible choice. Fixed payments, builds credit, and you're debt-free in 12 months.",
        realWorldEquivalent: "You'll pay $140 in interest over 12 months — less than $12/month in interest. That's a fair, affordable price for borrowing $2,500 to secure your first apartment.",
        borrowerReaction: "Fixed payments, one year and it's done, and it builds my credit? So this actually helps me qualify for a better apartment next time. Yeah. Yeah I can do this."
      },
      {
        id: "4b",
        type: "Credit Card - Minimum Payments",
        monthlyPayment: 71,
        apr: 22.99,
        termMonths: 60,
        totalCost: 4260,
        finePrint: "Easy to get! But at minimum payments it takes 5 years to pay off. You'll pay $1,760 in interest. Plus, maxing out your card tanks your credit score.",
        profit: 1760,
        redFlags: [
          "Minimum payments are DESIGNED to trap you in debt for years — this is by design",
          "At 22.99% APR, you pay $1,760 in interest — that's 70% of what you borrowed, just in fees",
          "Maxing out your card tanks your credit score by 50-100 points immediately",
          "A problem needing 12 months of payments becomes 5 years of payments"
        ],
        borrowerTip: "NEVER make only minimum payments on credit cards. Either pay in full each month, or get a fixed personal loan with a clear payoff date and no compounding surprises.",
        realWorldEquivalent: "You'll pay $1,760 in interest — enough for a round-trip flight, 3 months of groceries, or almost 2 months of rent. All for a debt that should have taken 12 months.",
        borrowerReaction: "Only $71 a month sounds manageable... but FIVE YEARS? I'll be paying off this apartment's security deposit when we're thinking about buying a place."
      },
      {
        id: "4c",
        type: "Payday Loan",
        monthlyPayment: 2875,
        apr: 391,
        termMonths: 1,
        totalCost: 2875,
        finePrint: "$15 per $100 = $375 fee, due in 14 days. Can't afford $2,875 lump sum? That's the trap! Roll it over = another $375 fee. Each rollover digs deeper.",
        profit: 375,
        redFlags: [
          "391% APR — the highest rate legally allowed in most states",
          "Full $2,875 balance due in just 14 DAYS — most people physically cannot do this",
          "Each rollover costs another $375 — that's $375 every two weeks, indefinitely",
          "Average payday borrower takes 8+ loans per year and spends 200 days in debt"
        ],
        borrowerTip: "Payday loans are financial quicksand. The moment you can't pay in full (which is almost always), you're trapped in rollovers. Ask for emergency aid, payment plans, or family help first.",
        realWorldEquivalent: "Three rollovers (6 weeks of fees) would cost $1,125 on top of the $2,500 borrowed. That's 45% of the loan amount in fees alone — in just 6 weeks.",
        borrowerReaction: "I need the full $2,875 back in 14 days? I don't even make that in a month. And if I can't pay, another $375 fee? This is a trap I can't escape."
      }
    ]
  },
  {
    id: "5",
    name: "Krondar Flameforge",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=krondar&backgroundColor=f97316&baseColor=dc2626",
    scenario: "Vulcanite freshman with a 500 credit emergency",
    dialogue: "So... I'm in my first semester and my ancient holo-tablet just died. I need it for literally every class. A replacement costs 500 credits, my next financial aid comes in 6 weeks, and I have 47 credits in my account. My roommate mentioned 'payday loan' places near campus. My older sibling said 'DON'T DO IT' but couldn't explain why. I also saw ads for 'buy now pay later' apps. Just 6 weeks... how bad could it be?",
    loanOptions: [
      {
        id: "5a",
        type: "Emergency Student Aid",
        monthlyPayment: 500,
        apr: 0,
        termMonths: 1,
        totalCost: 500,
        finePrint: "Most schools have emergency funds students don't know about! Takes 3-5 days. Often grants (FREE) or 0% loans you repay after graduation. Ask financial aid - it's their job!",
        profit: 0,
        redFlags: [],
        borrowerTip: "ALWAYS check your school's financial aid office FIRST before borrowing anything. Most colleges have emergency funds nobody knows about. It's literally one email or one visit.",
        realWorldEquivalent: "Free money or a 0% loan. This literally costs nothing to ask about — go ask for it. The worst they can say is 'we don't have funds available right now.'",
        borrowerReaction: "It was RIGHT THERE the whole time?! One email to the financial aid office and they had emergency funds I never knew about. Why doesn't anyone tell students this exists?"
      },
      {
        id: "5b",
        type: "Buy Now Pay Later App",
        monthlyPayment: 250,
        apr: 0,
        termMonths: 2,
        totalCost: 500,
        finePrint: "Split into 4 biweekly payments over 6 weeks. 0% if paid on time! But late fees are $7 per missed payment. Miss 2 = collections + 50 point credit score drop.",
        profit: 0,
        redFlags: [
          "Late fees ($7 per missed payment) can compound quickly if cash flow is inconsistent",
          "Missing 2 payments triggers collections and a 50-point credit score drop",
          "BNPL can become a spending habit — 'I'll pay later' is how debt accumulates over time"
        ],
        borrowerTip: "BNPL at 0% is genuinely helpful in real emergencies IF you're certain you can make payments. Set every payment as a phone calendar alert with a 3-day early warning.",
        realWorldEquivalent: "At 0% with on-time payments, this costs exactly $500. The risk is real but manageable. Just be honest with yourself about whether you can make the biweekly payments.",
        borrowerReaction: "Four payments, 0% if I'm on time. I just need to set reminders... and actually have the money when each payment hits. Six weeks. I can do six weeks."
      },
      {
        id: "5c",
        type: "Payday Loan",
        monthlyPayment: 575,
        apr: 391,
        termMonths: 1,
        totalCost: 575,
        finePrint: "$15 per $100 = $75 fee, due in 14 days. Can't afford $575 lump sum? Roll over = another $75. After 3 rollovers you've paid $225 in fees on $500 borrowed.",
        profit: 75,
        redFlags: [
          "391% APR — nearly 4 times your loan amount per year in interest charges",
          "$75 fee due in just 14 days on a $500 loan — that's 15% in 2 weeks",
          "Payday stores cluster near college campuses specifically targeting desperate students",
          "Each rollover adds another $75 — most borrowers can't stop once they start"
        ],
        borrowerTip: "Your older sibling was absolutely RIGHT. Never take payday loans. Check emergency student aid, talk to professors about extensions, call home — literally anything else comes first.",
        realWorldEquivalent: "Three rollovers (6 weeks) = $225 in fees on $500 borrowed. In 6 weeks you've paid 45% of the loan in fees and still owe the full $500. This is how debt spirals start.",
        borrowerReaction: "My sibling told me not to do this. $75 in fees just for two weeks, and I'll probably need to roll it over. They were right. I should have listened."
      }
    ]
  },
  {
    id: "6",
    name: "Ambassador Gloria Washington",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=gloria&backgroundColor=8b5cf6&baseColor=fbbf24",
    scenario: "Human from Earth - 18 years old, first 500 credit purchase",
    dialogue: "I just turned 18 and my mailbox EXPLODED with credit card offers! 'Pre-approved!' 'Build your credit!' I have no idea what any of this means. My parents always said credit cards are evil, but my friend says you NEED one for apartments later. I want to buy a 500 credit holo-gaming console. I have the cash saved up, but should I use a card to 'build credit' instead? That's what everyone says to do...",
    loanOptions: [
      {
        id: "6a",
        type: "Pay Cash - Keep Savings",
        monthlyPayment: 500,
        apr: 0,
        termMonths: 1,
        totalCost: 500,
        finePrint: "Use your savings and avoid all interest! You can build credit later with small purchases you pay off monthly. No debt = no stress.",
        profit: 0,
        redFlags: [],
        borrowerTip: "If you have the cash, paying cash for non-essential purchases is always safe. You can build credit by getting a card later and using it only for small purchases you pay off immediately.",
        realWorldEquivalent: "Zero interest. Zero debt. Zero stress. The gaming console costs exactly $500. This is financially solid — your money stays in your pocket.",
        borrowerReaction: "Just pay cash. No debt, no interest, no stress. I have the money — why complicate it? I can figure out credit cards another time with something smaller."
      },
      {
        id: "6b",
        type: "Credit Card - Pay in Full",
        monthlyPayment: 500,
        apr: 18.99,
        termMonths: 1,
        totalCost: 500,
        finePrint: "Put it on card, pay FULL balance by due date = $0 interest AND you build credit! This is the smart way. Set up autopay so you never miss.",
        profit: 0,
        redFlags: [],
        borrowerTip: "THIS is how credit cards should work: charge it, pay the FULL balance before the due date = $0 interest AND you build credit history. Set up autopay for the full balance — not just the minimum.",
        realWorldEquivalent: "Same cost as cash ($500), but you get purchase protection, fraud protection, credit history building, and possibly cashback rewards. This is the right move — if you pay it off.",
        borrowerReaction: "Charge it, pay it ALL off before the due date = zero interest AND I build credit? And I get purchase protection? This is actually smarter than cash if I set up autopay."
      },
      {
        id: "6c",
        type: "Store Card - Minimum Payments",
        monthlyPayment: 25,
        apr: 26.99,
        termMonths: 27,
        totalCost: 675,
        finePrint: "20% off first purchase sounds great! But at $25 minimum payments, it takes over 2 years to pay off. You pay $175 extra. For a gaming console.",
        profit: 175,
        redFlags: [
          "26.99% APR — one of the highest interest rates legally allowed anywhere",
          "That '20% off first purchase' discount evaporates by month 3 if you carry a balance",
          "Minimum payments are calculated to maximize your interest paid — this is by design",
          "Over 2 years in debt for a gaming console you'll probably replace before it's paid off"
        ],
        borrowerTip: "Store credit cards are marketing tools. That '20% off' discount is bait. If you pay only minimums, the $175 in interest wipes out the discount and then some.",
        realWorldEquivalent: "You spent $175 in interest on a gaming console — that's 35% more than the sticker price. It took over 2 years. You could've bought a better console for that $175.",
        borrowerReaction: "Twenty percent off sounded amazing. But I'll be paying minimum payments on a gaming console for over TWO YEARS. By then I'll want the next version. This was bait."
      }
    ]
  },
  {
    id: "7",
    name: "Petra Solaris",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=petra&backgroundColor=0ea5e9&baseColor=f43f5e",
    scenario: "Nebulite college student with a 3,000 credit hospital bill",
    dialogue: "So I had a really bad reaction to some contaminated moon algae and ended up in Galactic Med Center for 3 days. Insurance covered most of it but I still owe 3,000 credits. The billing office gave me three ways to pay it off and I don't know which one to pick. One is from the hospital itself, one is a special 'medical credit card' my nurse mentioned, and the third is a regular personal loan from my bank. They all seem kind of similar? The medical card said '0% interest' in big letters so that sounds amazing...",
    loanOptions: [
      {
        id: "7a",
        type: "Hospital Payment Plan",
        monthlyPayment: 250,
        apr: 0,
        termMonths: 12,
        totalCost: 3000,
        finePrint: "Most hospitals offer 0% in-house payment plans — just ask the billing office. Fixed $250/month, no interest, no credit check. Pay off medical debt without any lender markup.",
        profit: 0,
        redFlags: [],
        borrowerTip: "ALWAYS ask the hospital billing office for an in-house payment plan FIRST. Most hospitals have 0% plans that bypass lenders entirely. They also have charity care programs if you qualify.",
        realWorldEquivalent: "The $3,000 bill costs exactly $3,000 — split into 12 equal payments. No interest, no lender, no middleman. This is the correct answer for medical debt.",
        borrowerReaction: "The hospital itself has a 0% payment plan and I didn't even know to ask? I almost signed up for that medical card. I should've started with the billing office."
      },
      {
        id: "7b",
        type: "Medical Credit Card (CareCredit)",
        monthlyPayment: 67,
        apr: 26.99,
        termMonths: 72,
        totalCost: 4824,
        finePrint: "Deferred interest: '0% for 18 months' IF paid in full. Miss the deadline? 26.99% APR applies RETROACTIVELY to the full $3,000 from day one. At minimum payments it takes 6 years.",
        profit: 1824,
        redFlags: [
          "Deferred interest: missing the deadline by ONE DAY charges full 26.99% APR from Day 1",
          "Minimum payments are designed to ensure most patients don't pay off in time",
          "Medical providers earn referral fees for steering patients toward these cards",
          "At $67/month minimum, it takes 6 YEARS to pay off a bill from a 3-day hospital stay"
        ],
        borrowerTip: "Medical credit cards are one of the most common debt traps in healthcare. The '0% promotional period' almost always ends with deferred interest charges. Ask for the hospital's own plan instead.",
        realWorldEquivalent: "At minimum payments, that 3-day hospital stay costs $4,824 — $1,824 extra paid to a credit card company. That's 60% more than the original bill, over 6 years.",
        borrowerReaction: "Wait — if I miss the promotional deadline the interest hits RETROACTIVELY from day one? And my nurse was recommending this? Why would they do that?"
      },
      {
        id: "7c",
        type: "Personal Loan (Bank)",
        monthlyPayment: 140,
        apr: 11.5,
        termMonths: 24,
        totalCost: 3360,
        finePrint: "Fixed rate, fixed payments, paid off in 2 years. Better than the medical card but worse than the hospital's own plan. Only use if hospital refuses an internal payment plan.",
        profit: 360,
        redFlags: [
          "Paying $360 in interest on a medical bill is avoidable — the hospital plan has 0% interest",
          "A lender profits from your health emergency — that money could go toward recovery instead"
        ],
        borrowerTip: "A bank personal loan is a reasonable fallback if the hospital won't offer an in-house plan. But always exhaust hospital options first — many have charity care for lower-income patients too.",
        realWorldEquivalent: "You'll pay $360 in interest over 2 years — about $15/month. That's reasonable, but completely avoidable. The hospital's own 0% plan costs $360 less for identical coverage.",
        borrowerReaction: "It's better than the medical card, but I'm still paying $360 in interest on a hospital bill I didn't choose to have. At least it's paid off in 2 years, not 6."
      }
    ]
  },
  {
    id: "8",
    name: "Orb-5 the Homebody",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=orb5&backgroundColor=10b981&baseColor=f97316",
    scenario: "Android student furnishing a first apartment — needs 1,500 credits in furniture",
    dialogue: "I just got my first place and it's completely empty! I need a couch, a bed, and basic furniture. The problem is I only have 300 credits saved, so I need about 1,500 credits worth of stuff. My friend told me about a rent-to-own store where you pay weekly and get furniture NOW — no credit check! But my older sibling keeps sending me links to thrift stores and Facebook Marketplace. And the furniture store has a 'no payments for 12 months' card. What's the play here?",
    loanOptions: [
      {
        id: "8a",
        type: "Thrift Stores & Used Marketplace",
        monthlyPayment: 300,
        apr: 0,
        termMonths: 2,
        totalCost: 600,
        finePrint: "Buy used furniture for 30-50% of retail price. Takes a weekend of searching. Mattress in a box new from Amazon: $250. Functional used couch: $80. You own it immediately, outright.",
        profit: 0,
        redFlags: [],
        borrowerTip: "Furnished apartments exist. Thrift stores, Facebook Marketplace, OfferUp, and Craigslist are full of excellent used furniture for 20-40 cents on the dollar. Your first place doesn't need to be Pinterest-perfect.",
        realWorldEquivalent: "A functional living setup costs about $400-600 used. That same setup at a rent-to-own store costs $3,900+. Used furniture is the move — you own it, owe nothing, and it works just as well.",
        borrowerReaction: "Wait — the same couch I'm renting for $85/week costs $80 at the thrift store two blocks away? And I'd OWN it? Why did I even consider rent-to-own?"
      },
      {
        id: "8b",
        type: "Furniture Store Credit Card",
        monthlyPayment: 45,
        apr: 22.99,
        termMonths: 48,
        totalCost: 2160,
        finePrint: "'No payments for 12 months!' sounds like a deal. But after 12 months, 22.99% APR kicks in. At $45 minimum payments it takes 4 years total. You're financing a couch for 4 years.",
        profit: 660,
        redFlags: [
          "22.99% APR kicks in after the promotional period — often with a retroactive deferred interest surprise",
          "4 years of payments for furniture that depreciates to near-zero value immediately",
          "Minimum payments are calibrated to maximize interest paid, not to help you pay it off",
          "You'll own a couch for 4 years and pay 44% more than its purchase price"
        ],
        borrowerTip: "Never finance rapidly depreciating items (furniture, electronics) with high-APR cards. If you must use credit, pay the balance before the promotional period ends — or better yet, buy used for cash.",
        realWorldEquivalent: "That $1,500 couch-and-bed set costs $2,160 over 4 years. For $660 more, you could have furnished your entire apartment in cash from the thrift store twice.",
        borrowerReaction: "Forty-eight monthly payments. I'll be paying for this couch long after it's worn out. And 4 years from now I might not even be in this apartment anymore."
      },
      {
        id: "8c",
        type: "Rent-to-Own Store",
        monthlyPayment: 369,
        apr: 184,
        termMonths: 12,
        totalCost: 4428,
        finePrint: "$85/week for 52 weeks = $4,420 total for $1,500 in furniture. No credit check! But 184% effective APR. Half of renters never complete payments — the store repossesses and re-rents the same item.",
        profit: 2928,
        redFlags: [
          "184% effective APR — among the highest of any legal lending product",
          "You pay $4,420 for $1,500 of furniture — almost 3x the retail price",
          "No credit check is the warning sign: they profit heavily from people who default",
          "Repossession is instant — miss one payment and they take the furniture back"
        ],
        borrowerTip: "Rent-to-own is one of the most expensive ways to acquire anything. You pay 2-4x retail price for items that immediately depreciate. Buy used for cash, or save up. Never rent-to-own.",
        realWorldEquivalent: "That $1,500 furniture set costs $4,420 at rent-to-own. With that $4,420 you could have furnished an entire 2-bedroom apartment in cash from IKEA or the thrift store.",
        borrowerReaction: "I'm paying $4,420 for $1,500 of furniture? And if I miss one week, they just take it back? So I could lose everything AND lose all the money I paid? This is madness."
      }
    ]
  },
  {
    id: "9",
    name: "Nova Starlette",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=novastarlette&backgroundColor=d946ef&baseColor=fbbf24",
    scenario: "Cosmian college student considering financing a spring break trip",
    dialogue: "Okay so EVERYONE is going to Planet Tropica for spring break — it's like the biggest trip of the year. It costs about 1,200 credits for the whole thing, and I've saved 600. So I'm just 600 credits short! My roommate says I should 'just put it on a credit card' and I saw a personal loan app on my phone. My parents say I'm being irresponsible but they don't understand how important this trip is socially. It's just 600 credits, and I'll be working all summer to pay it off. How bad could it be?",
    loanOptions: [
      {
        id: "9a",
        type: "Skip It — Save Up for Next Year",
        monthlyPayment: 200,
        apr: 0,
        termMonths: 3,
        totalCost: 600,
        finePrint: "Save $200/month for 3 months. Go on the NEXT trip debt-free. The social pressure is real, but borrowing for a vacation locks you into payments that follow you home.",
        profit: 0,
        redFlags: [],
        borrowerTip: "Borrowing for non-essential experiences is almost always a mistake. The vacation ends in 5 days; the debt follows you for months or years. Your parents are right on this one.",
        realWorldEquivalent: "This isn't a choice between going or not — it's a choice between going into debt now or going for free next time. The trip costs $0 in interest if you wait 3 months.",
        borrowerReaction: "Missing the trip hurts. But everyone who borrowed for it is still paying it off when the next trip comes up. I'll have $600 saved by summer and go next time, debt-free."
      },
      {
        id: "9b",
        type: "Personal Loan App",
        monthlyPayment: 55,
        apr: 17.9,
        termMonths: 12,
        totalCost: 660,
        finePrint: "Fixed 12-month loan. You'll pay $60 in interest. Sounds minor, but this normalizes borrowing for discretionary spending — a habit that compounds over a lifetime.",
        profit: 60,
        redFlags: [
          "Normalizes using debt for non-essential purchases — this is how debt habits form",
          "If one vacation, why not the next? And concerts? And clothes? The habit grows",
          "A $60 interest bill follows a 5-day trip home — the fun ends, the debt stays"
        ],
        borrowerTip: "A $60 loan cost sounds small. But the real cost is the habit: borrowing for things you want but don't need. Every personal finance crisis starts with a series of 'it's only a little bit' decisions.",
        realWorldEquivalent: "You pay $60 in interest for a 5-day trip. That's $12/day in interest. If you borrowed for every vacation in college, you'd graduate with thousands in 'just $60' vacation debt.",
        borrowerReaction: "Only $60 extra. It doesn't sound like much. But if I do this for every trip, every concert, every 'just this once' moment... I see how that adds up over four years of college."
      },
      {
        id: "9c",
        type: "Credit Card Cash Advance",
        monthlyPayment: 25,
        apr: 29.99,
        termMonths: 36,
        totalCost: 900,
        finePrint: "Cash advances have NO grace period — interest starts the moment you withdraw. Plus a 5% advance fee ($30) on top. At $25/month it takes 3 years. You'll pay $300 extra for a 5-day trip.",
        profit: 300,
        redFlags: [
          "Cash advance fee: 5% charged immediately on top of the loan amount",
          "No grace period: interest starts accruing the SECOND you take the advance",
          "29.99% APR — the highest rate on most cards, reserved for cash advances",
          "Three years of payments for a five-day trip you'll barely remember"
        ],
        borrowerTip: "Credit card cash advances are the worst way to borrow. No grace period, immediate high-interest accrual, plus an upfront fee. Treat cash advances as a financial emergency tool, not vacation funding.",
        realWorldEquivalent: "You'll pay $300 in interest and fees for a spring break trip — that's half the cost of the trip again. Three years from now you're still paying $25/month for Planet Tropica.",
        borrowerReaction: "$300 in interest for a 5-day trip? So the vacation that costs $1,200 actually costs $1,500? And I'll be paying it off for 3 years? Spring break 2025... paying for it until 2028."
      }
    ]
  },
  {
    id: "10",
    name: "Grub-X the Hustler",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=grubx&backgroundColor=eab308&baseColor=7c3aed",
    scenario: "Entrepreneurial Android needs 4,000 credits for a delivery cargo-bot",
    dialogue: "I've been doing food delivery on foot and I'm maxing out at 40 credits per hour. If I get a cargo hover-bot, I could do 3x the deliveries and make 120 credits per hour! The bot costs 4,000 credits and I have 800 saved. I've been researching ways to get the other 3,200 credits. A small business lender offered me an 'equipment loan.' A leasing company wants me to rent-to-own it. And some fintech app said I can get a 'merchant cash advance' in 24 hours — no business history needed! The MCA sounds SO fast and easy...",
    loanOptions: [
      {
        id: "10a",
        type: "Equipment Loan (Credit Union)",
        monthlyPayment: 103,
        apr: 8.5,
        termMonths: 36,
        totalCost: 3708,
        finePrint: "Fixed rate for 3 years. You OWN the bot outright. Monthly payment is $103. The bot earns you $3,600+ extra per month vs. on-foot. This is genuinely a good business loan.",
        profit: 508,
        redFlags: [],
        borrowerTip: "Equipment loans from credit unions are often the right move for income-generating assets. The math works: if the asset earns more than the loan costs, it's a smart investment. Run the numbers first.",
        realWorldEquivalent: "You pay $508 in interest over 3 years. But the cargo bot earns you an extra $80+/hour vs. on-foot. In the first month alone, the extra income more than covers the loan payment.",
        borrowerReaction: "I pay $508 in interest over 3 years, but the bot earns me extra credits EVERY DAY. The loan pays for itself in the first week. This is what a smart business investment looks like."
      },
      {
        id: "10b",
        type: "Equipment Lease",
        monthlyPayment: 195,
        apr: 19.5,
        termMonths: 24,
        totalCost: 4680,
        finePrint: "Pay $195/month for 24 months, then $450 buyout = $5,130 total. You don't own it during the lease. Miss a payment = they repossess your livelihood immediately. Higher cost than the loan.",
        profit: 1130,
        redFlags: [
          "You don't OWN the equipment during the lease — the lessor does",
          "Miss a payment and they repossess the cargo bot you depend on for income",
          "Total cost ($5,130) is $1,422 more than the equipment loan for identical equipment",
          "19.5% effective rate vs. 8.5% for the loan — pay attention to the APR"
        ],
        borrowerTip: "Leasing income-generating equipment sounds appealing but the math rarely works vs. owning. You pay more, own nothing during the lease period, and risk your livelihood if cash flow dips.",
        realWorldEquivalent: "You'll pay $1,130 extra vs. owning outright, and $622 more than the credit union loan. Over 24 months that's $622 that could've gone toward a second cargo bot.",
        borrowerReaction: "I'm paying $195/month and I don't even own it. If one bad week hits and I miss a payment, they take the bot and I'm back on foot. The loan is way better for the same equipment."
      },
      {
        id: "10c",
        type: "Merchant Cash Advance",
        monthlyPayment: 933,
        apr: 94,
        termMonths: 6,
        totalCost: 5600,
        finePrint: "Borrow $3,200, repay $5,600 ('factor rate' 1.75). Paid back through automatic daily deductions — 20% of every day's revenue, whether you made money or not. Designed for desperate businesses.",
        profit: 2400,
        redFlags: [
          "Factor rate of 1.75 = you repay $5,600 for $3,200 borrowed — 75% premium",
          "Daily automatic deductions mean on slow days you're still paying the same amount",
          "94% effective APR — legally not classified as a 'loan' so interest rate rules don't apply",
          "'No business history needed' means they expect desperate borrowers who can't get real loans"
        ],
        borrowerTip: "Merchant cash advances are the payday loans of the business world. The 'factor rate' hides the true cost. 94% effective APR makes the loan payment eat most of your new earnings.",
        realWorldEquivalent: "You pay $2,400 extra — 75% of what you borrowed — in just 6 months. The credit union loan costs $508 total. That's $1,892 in extra fees for the privilege of getting money in 24 hours.",
        borrowerReaction: "I'm paying back $5,600 for $3,200 borrowed? In 6 months? And they take 20% of my revenue EVERY DAY regardless of how business goes? The speed isn't worth this."
      }
    ]
  }
];

export const educationalInsights = [
  {
    title: "Federal vs Private Student Loans: HUGE Difference",
    content: "Federal loans have fixed rates, income-driven repayment, and forgiveness programs. Private loans have variable rates that can skyrocket, require cosigners, and offer zero flexibility. Always max out federal loans before considering private ones!"
  },
  {
    title: "Dealer Financing: The Hidden Markup",
    content: "Dealers can legally mark up your interest rate by 2-3% above the bank's offer and pocket the difference. A 5% rate from the bank becomes 8% at the dealer. On a $10,000 car, that 'convenience' costs you almost $2,000 extra. Always get pre-approved BEFORE visiting the dealership."
  },
  {
    title: "Deferred Interest: The 0% Trap",
    content: "67% of people don't pay off their '0% for 6 months' purchases in time. Miss the deadline by ONE DAY and the full interest is applied retroactively to day one. A $1,200 phone can cost $1,800 over 3 years. Set calendar reminders or just don't do it!"
  },
  {
    title: "Payday Loans: Designed to Trap You",
    content: "The average payday borrower takes out 8 loans per year and spends 200 days in debt. A $500 loan at $15 per $100 seems small, but that's 391% APR. Most can't pay the lump sum, so they 'roll over' — paying $75 every two weeks, indefinitely."
  },
  {
    title: "Credit Cards: Tools, Not Traps",
    content: "Credit cards aren't evil — they're tools. Charge only what you can pay in full each month = $0 interest AND you build credit. Pay only the minimum? A $500 purchase takes over 2 years and costs $175 extra. The choice is yours!"
  },
  {
    title: "Emergency Funds at School: Ask First!",
    content: "Most colleges have emergency student funds that nobody knows about. Grants (free money!) or 0% loans for unexpected expenses. Check with your financial aid office before turning to high-interest options. It takes 5 minutes to ask."
  },
  {
    title: "Medical Debt: Always Ask the Hospital First",
    content: "Most hospitals offer 0% in-house payment plans that patients never hear about. Medical credit cards (like CareCredit) sound helpful but use deferred interest — miss the deadline by one day and full retroactive interest hits. Many hospitals also have charity care programs. Ask the billing office before signing anything with a lender."
  },
  {
    title: "Rent-to-Own: Paying 3x Retail for Things You Don't Own",
    content: "Rent-to-own stores charge 150-300% of retail price for furniture and electronics — often 184% effective APR or higher. You don't own anything until the final payment. Miss one payment and they repossess it. The same items cost 70-80% less used at a thrift store or marketplace app. Never rent-to-own."
  },
  {
    title: "Never Finance a Vacation or Non-Essential Purchase",
    content: "The vacation ends in 5 days. The debt follows you for months or years. Credit card cash advances have no grace period — interest starts the moment you withdraw, plus a 5% fee. Borrowing for non-essential experiences is how good financial habits break down. If you can't cash-flow it, wait."
  },
  {
    title: "Merchant Cash Advances: The Business World's Payday Loan",
    content: "Merchant cash advances (MCAs) use 'factor rates' instead of APR to hide the true cost. A factor rate of 1.4 means you repay $5,600 for $4,000 borrowed — 40% premium in 6 months. That's 80-150% effective APR. Daily automatic deductions happen regardless of your revenue. Always try a credit union equipment loan first."
  }
];

export const redFlagSignatures = [
  { flag: "Variable interest rate", warning: "Can increase anytime with no cap" },
  { flag: "No credit check required", warning: "Usually means predatory APR — they expect you to struggle" },
  { flag: "Low monthly payment", warning: "Hidden trick: longer terms = more total interest paid" },
  { flag: "GPS tracker / instant repossession", warning: "They plan to take it back — default is part of the model" },
  { flag: "Deferred interest '0% offer'", warning: "Miss by 1 day = retroactive full APR from Day 1" },
  { flag: "Origination / processing fees", warning: "Adds to your balance before you receive any money" },
  { flag: "Cosigner required", warning: "Your default destroys someone else's credit and finances" },
  { flag: "Only minimum payment required", warning: "Designed to maximize interest — always pay more" },
];
