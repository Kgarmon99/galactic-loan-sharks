# Moneybot Financial Literacy Game - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing from retro arcade games combined with modern fintech UI patterns. Primary inspiration from retro gaming aesthetics (arcade cabinets, pixel art interfaces) merged with sleek robot/tech aesthetics. The Moneybot character serves as the central visual anchor throughout the experience.

## Core Design Elements

### Typography System

**Primary Font**: "Press Start 2P" or "VT323" (Google Fonts) - retro gaming feel for headers and Moneybot dialogue
**Secondary Font**: "Inter" or "Space Grotesk" (Google Fonts) - clean, modern sans-serif for game UI, loan details, and body text
**Tertiary Font**: "Roboto Mono" - for numerical data, profit counters, interest rates

**Hierarchy**:
- Game title/logo: 48-64px, Press Start 2P, uppercase, tracking-wide
- Moneybot dialogue: 18-24px, Press Start 2P
- Section headers: 32-40px, Space Grotesk, bold
- Loan option cards: 16-20px, Inter, semi-bold for titles
- Body text/terms: 14-16px, Inter, regular
- Fine print: 12px, Roboto Mono
- Profit counter: 24-32px, Roboto Mono, tabular numbers

### Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, and 16
- Micro spacing (UI elements): p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: p-8, py-12
- Major layout gaps: gap-8, gap-12
- Container margins: mx-16 on desktop

**Grid Structure**:
- Game viewport: Full-screen contained experience (max-w-7xl mx-auto)
- Loan options: 3-column grid on desktop (grid-cols-1 md:grid-cols-3 gap-6)
- Character + dialogue: 2-column split (60/40 ratio)
- Results screen: Centered single column (max-w-2xl)

## Component Library

### Game Shell
- Full-screen game container with border treatment (8px thick border, rounded-2xl)
- Fixed header bar (h-16) with Moneybot logo, profit counter, and controls (fullscreen, info, sound toggle)
- Corner vignette decorative elements (absolute positioned, pointer-events-none)
- Device rotation overlay (hidden on landscape, full-screen centered on portrait mobile)

### Character Display
- Moneybot character image: Large (w-64 md:w-96), positioned left or center depending on game state
- Speech bubble container: Rounded-3xl, p-6, with tail pointer toward character
- Character slots for borrowers: Smaller (w-48), positioned right side
- Animated state transitions between characters (slide-in/fade effects)

### Loan Selection Cards
- Card container: Rounded-xl, border-2, p-6
- Header section: Loan type label (text-sm, uppercase, tracking-wider)
- Primary metric display: Monthly payment (text-3xl, Roboto Mono)
- Secondary details grid: 2-column layout for APR, term, total cost
- Fine print section: text-xs, mt-4, border-t, pt-4
- Selection button: w-full, py-4, rounded-lg, uppercase, tracking-wide, font-semibold
- Feedback indicator: Absolute positioned badge (top-right) showing profit potential after selection

### Game Flow Screens

**Start Screen**:
- Centered layout (flex items-center justify-center min-h-screen)
- Moneybot logo/character: Large hero image (w-80 h-80)
- Game title: Above character
- "Start Playing" CTA: Large button (px-12 py-6, text-xl)
- Info icon button: Absolute top-right (w-12 h-12)

**Gameplay Screen**:
- Split layout: Character area (left 40%) + loan options (right 60%)
- Scenario text: Top section, p-8, backdrop-blur treatment if over background
- Profit tracker: Sticky top-right corner with running total
- Progress indicator: Bottom bar showing borrower count (e.g., "Client 3 of 8")

**Results Screen**:
- Full-screen centered content
- Final profit display: Massive typography (text-6xl md:text-8xl, Roboto Mono)
- Performance breakdown: Grid of stats (loans issued, average profit, shadiest loan)
- Educational insights: Card-based layout with key takeaways
- Action buttons: "Play Again" (primary), "Share Results" (secondary), side-by-side

### UI Controls
- Icon buttons: w-12 h-12, rounded-lg, backdrop-blur
- Toggle switches: For sound/music (w-14 h-8, rounded-full)
- Progress bars: h-2, rounded-full, animated width transitions
- Modal overlays: Centered (max-w-2xl), rounded-2xl, p-8, backdrop-blur-xl background

## Animation Guidelines

**Use Sparingly** - Only for:
- Character entry/exit: Slide-in from sides (300ms ease-out)
- Card selection feedback: Scale pulse on click (150ms)
- Profit counter: Count-up animation when value changes
- Screen transitions: Fade between game states (400ms)
- Button press: Subtle scale down (0.95) on active state

**Avoid**: Continuous animations, parallax effects, scroll-triggered animations

## Responsive Behavior

**Desktop (lg:)**: Full 3-column loan grid, side-by-side character layout
**Tablet (md:)**: 2-column loan grid, stacked character above options
**Mobile (base)**: Single column, character minimized or hidden during selection, full-width cards

**Critical Mobile Feature**: Rotation detection overlay requiring landscape orientation for optimal play

## Images

### Required Images

**Moneybot Character**:
- Main character sprite: Robot with neon accents, friendly but slightly mischievous expression
- Placement: Left side of gameplay screen, centered on start screen
- Variations: Neutral, happy (good selection), disappointed (missed profit)
- Size: 384px x 384px minimum, transparent background PNG

**Borrower Characters**:
- 6-8 unique character illustrations representing diverse borrowers
- Placement: Right side during dialogue, smaller than Moneybot
- Style: Simpler than Moneybot, clear emotional states
- Size: 192px x 192px each

**Background Elements**:
- Subtle tech grid pattern or circuit board texture (low opacity)
- Corner vignette graphics (small decorative elements)
- Title screen background: Abstract tech/financial themed

**UI Elements**:
- Fullscreen icon, info icon, sound toggle icons (use Heroicons or Font Awesome)
- Rotation device indicator: Phone/tablet rotation graphic

### Hero Treatment
No traditional hero section - this is an immersive game interface. The "Start Screen" serves as the entry point with Moneybot character as the central hero image with minimal surrounding elements, creating immediate visual impact before gameplay begins.

## Accessibility

- Focus states on all interactive elements (ring-2 ring-offset-2)
- Keyboard navigation support for loan selection (arrow keys + enter)
- Screen reader labels for profit counter updates
- High contrast text on all backgrounds (minimum WCAG AA)
- Skip to gameplay button for returning users