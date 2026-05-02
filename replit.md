# Moneybot Financial Literacy Game

## Overview

Moneybot is an educational single-page web game that teaches players about predatory lending practices and financial literacy. Players take on the role of "Moneybot," a loan-offering robot, and must select loan options for different borrowers to maximize profit. The game demonstrates how predatory lending works by having players experience the lender's perspective, ultimately revealing the ethical implications of prioritizing profit over fair lending practices.

The application features multiple borrower scenarios with different loan options, each with varying interest rates, terms, and profit margins. After completing all scenarios, players receive a results screen showing their total profit and the impact of their lending decisions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for the UI framework
- **Vite** as the build tool and development server with HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** (React Query) for state management and data fetching

**Rationale**: Vite provides fast development builds and HMR, while React with TypeScript ensures type safety. Wouter keeps the routing lightweight for this simple single-page game. TanStack Query handles asynchronous state management patterns even though the current implementation appears to be primarily client-side.

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** and **clsx** for conditional class management

**Rationale**: The shadcn/ui approach provides accessible, customizable components without a heavy framework dependency. Radix UI primitives ensure accessibility compliance. Tailwind enables rapid styling with a consistent design system defined in the configuration.

**Design System - Galactic Loan Sharks 8-Bit Theme**
- Retro 8-bit pixel art aesthetic with "Galactic Loan Sharks" branding (Sector 7G, Year 2485)
- Pink/magenta and purple color scheme with yellow/gold accents for profit
- Dark backgrounds with pixel grid overlay and scanline effects
- Press Start 2P font for pixel titles, VT323 for body text
- Pixel-style borders (4px solid), no border-radius (sharp edges)
- RPG/visual novel style dialogue with typewriter effect
- Arcade-style buttons with drop shadows and hover animations
- "Loan Shark Office" theme: victims, credits, hunting metaphors

**Avatar System**
- Players choose from 8 space/alien themed avatars at game start:
  - Nova (Rocket icon) - Starship Captain
  - Zyx-9 (Skull icon) - Alien Banker
  - Orion (Star icon) - Star Trader
  - Nebula (Sparkles icon) - Cosmic Oracle
  - Vortex (CircleDot icon) - Space Analyst
  - Titan (Bot icon) - Robot Banker
  - Aurora (Zap icon) - Light Weaver
  - Cosmos (Globe icon) - Planet Broker
- Avatar data stored in `client/src/lib/avatars.ts`
- Each avatar has unique color scheme and Lucide icon
- Player avatar displayed during gameplay instead of static character

**Educational Design (No Hints + Immersive In-Game Reveal)**
- Loan cards do NOT show which option is best - players must figure it out
- No profit amounts or total cost shown on cards - players must analyze APR, term, and monthly payment
- All loan cards styled identically to prevent visual hints
- After each selection — compact, in-game educational flow (not a classroom panel):
  - Score banner with profit amount and shark reaction quote
  - Borrower speech bubble: short emotional in-character quote revealing consequences
  - Transaction receipt: Principal + Interest = Total (compact, scannable)
  - Red flag chips: 2-3 small inline chips for predatory loan features
  - Collapsible "SHARK INTEL" button expands to show full borrower protection tip
  - Wrong-answer hint: one line showing max-profit loan comparison
- Results screen educational sections:
  - "Flip the Script" - explains the predatory playbook they just used
  - "Red Flag Radar" - 8 warning signs to recognize in real loans
  - "Scenario Lessons" - full educational breakdown per scenario
  - "Predatory Lending Certified" badge affirming learning
- `redFlagSignatures` exported from `gameData.ts` with 8 universal predatory loan warning signs
- Each loan option has `redFlags[]`, `borrowerTip`, `realWorldEquivalent`, and `borrowerReaction` fields

**Borrower Office Animations**
- Player (loan shark) sits on LEFT, borrower enters from the RIGHT
- Walk-in animation (cubic-bezier bounce overshoot), idle float while player chooses
- Reaction animations: `borrower-trapped` (shake/tilt) for predatory, `borrower-relieved` (bounce) for fair
- Walk-out animation when player clicks CONTINUE, then next scenario loads
- Nested architecture: outer div handles walk-in/out/reaction; inner image div handles idle float

**Alien Borrowers (Student-Relevant Scenarios)**
- 10 scenarios targeting high school and college students:
  - Zyx'thor the Graduate (Zorblaxian) - Student loans: Federal vs Private vs Credit Card
  - Kira Stellanova (Nebulite) - First car: Credit union vs dealer financing vs "buy here pay here"
  - Blip-9 (Android) - Phone financing: Save up vs carrier plan vs store credit card
  - The Glorblings (Plutonians) - First apartment: Moving costs and funding options
  - Krondar Flameforge (Vulcanite) - Emergency expense at college: Emergency aid vs BNPL vs payday loans
  - Ambassador Gloria Washington (Human from Earth) - First credit card: How to use it right vs wrong
  - Petra Solaris (Nebulite) - Medical bill: Hospital payment plan vs medical credit card vs personal loan
  - Orb-5 the Homebody (Android) - Rent-to-own furniture: Thrift/used vs store credit card vs rent-to-own
  - Nova Starlette (Cosmian) - Spring break trip: Skip/save vs personal loan vs credit card cash advance
  - Grub-X the Hustler (Android) - Side hustle equipment: Equipment loan vs lease vs merchant cash advance
- All dialogue adapted with space terminology while teaching real financial lessons
- Avatar images use DiceBear Bottts API for robot/alien avatars

**Rationale**: Simplified design focuses on immersive gameplay rather than complex UI elements. The "space station loan office" metaphor makes the experience feel like an actual game where alien customers come in asking for loans.

**Game State Management**
- Local component state using React hooks (`useState`, `useEffect`)
- Game phases: 'start' → 'playing' → 'results'
- Player data: name and selected avatar stored in Game.tsx state
- Client-side data stored in `client/src/lib/gameData.ts` containing borrower scenarios and loan options
- No server-side persistence (in-memory game state only)

**Rationale**: The game is self-contained and educational, requiring no user accounts or data persistence. All game logic runs client-side for simplicity and immediate feedback.

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript
- Custom middleware for request logging and JSON parsing
- Static file serving for the built client application
- HTTP server created with Node's `http` module

**Rationale**: Express provides a minimal, flexible foundation. The server primarily serves the built React application and could be extended with API endpoints if needed for future features (leaderboards, analytics, etc.).

**Development vs. Production**
- **Development**: Vite dev server integrated as Express middleware for HMR
- **Production**: Pre-built static files served from `dist/public`
- Build process uses esbuild for server bundling and Vite for client bundling

**Rationale**: This setup enables fast development iteration with HMR while maintaining efficient production builds. The selective bundling of server dependencies (allowlist approach) optimizes cold start times.

**Storage Interface**
- Abstract `IStorage` interface defined in `server/storage.ts`
- In-memory implementation (`MemStorage`) with basic user CRUD operations
- Ready to be replaced with database implementation

**Rationale**: The interface abstraction allows easy migration to a persistent database (like PostgreSQL with Drizzle ORM) without changing consuming code. Currently uses in-memory storage since the game doesn't require persistence.

### Data Layer

**Database Configuration (Prepared but Not Active)**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` (currently only game data types, no database tables)
- Migration setup via `drizzle-kit` pointing to `./migrations` directory

**Rationale**: The project is configured for Neon's serverless PostgreSQL, which provides automatic scaling and serverless execution. Drizzle ORM offers TypeScript-native database access with type-safe queries. Currently, the database connection is configured but not actively used since game state is client-side only.

**Data Schemas**
- Zod schemas for runtime validation of game data (`loanOptionSchema`, `borrowerScenarioSchema`, `gameResultSchema`)
- TypeScript types derived from Zod schemas for compile-time safety
- Shared schemas between client and server via `shared/` directory

**Rationale**: Zod provides both runtime validation and TypeScript type inference from a single source of truth. The shared directory ensures client and server use identical data structures.

### Module Resolution & Build

**Path Aliases**
- `@/*` → `client/src/*` for client code
- `@shared/*` → `shared/*` for shared schemas/utilities
- `@assets/*` → `attached_assets/*` for images and static assets

**Rationale**: Clean import paths improve code readability and make refactoring easier. The aliases are consistent across TypeScript, Vite, and the build process.

**Build Strategy**
- Two-stage build: client (Vite) then server (esbuild)
- Server dependencies selectively bundled (allowlist) to reduce syscalls
- Output to `dist/` directory with public assets in `dist/public/`

**Rationale**: Bundling frequently-used server dependencies reduces filesystem operations, improving cold start performance in serverless environments. The allowlist approach keeps bundle sizes reasonable while externalizing less-critical dependencies.

## External Dependencies

### UI & Component Libraries
- **Radix UI** (v1.x) - Accessible component primitives (Dialog, Dropdown, Accordion, Toast, etc.)
- **Lucide React** - Icon library (imported via components)
- **Embla Carousel** - Carousel functionality (if needed for future features)

### Styling & Design
- **Tailwind CSS** (v3.x) with PostCSS
- **Autoprefixer** for CSS vendor prefixing
- Google Fonts (Press Start 2P, VT323, Inter, Space Grotesk, Roboto Mono, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### State & Data Management
- **TanStack Query** (v5) - Asynchronous state management
- **React Hook Form** with **Hookform Resolvers** - Form validation (prepared for future use)
- **Zod** - Schema validation and type inference
- **Drizzle Zod** - Integration between Drizzle ORM and Zod schemas

### Database & ORM
- **Drizzle ORM** (v0.39) - TypeScript ORM
- **@neondatabase/serverless** (v0.10) - Neon PostgreSQL serverless driver
- **Drizzle Kit** - Database migrations and schema management

### Utilities
- **date-fns** (v3.6) - Date manipulation
- **nanoid** - Unique ID generation
- **class-variance-authority** - Variant-based component styling
- **clsx** & **tailwind-merge** - Conditional class name management

### Development Tools
- **Vite** (v5+) - Build tool and dev server
- **@vitejs/plugin-react** - React support for Vite
- **esbuild** - JavaScript bundler for server code
- **tsx** - TypeScript execution for development
- **TypeScript** (v5+) - Type system

### Replit-Specific Plugins
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay
- **@replit/vite-plugin-cartographer** - Development tooling (dev only)
- **@replit/vite-plugin-dev-banner** - Development banner (dev only)

### Session & Security (Configured but Not Active)
- **express-session** - Session management
- **connect-pg-simple** - PostgreSQL session store
- **memorystore** - In-memory session store fallback

**Note**: Session management dependencies are installed but not currently implemented in the codebase. These would be activated when adding user accounts or persistent game progress.