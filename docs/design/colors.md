# Color Tokens

SYNTHEX uses a structured color token system with three groups: **Terminal** (retro aesthetic), **Brand** (global identity), and **Background/Text** (layout foundations).

Change one token to update all instances across the entire site instantly.

## Terminal Colors

Used inside Terminal Dashboard, Terminal Image, and all CRT-style UI elements. The most frequently customized tokens.

### TerminalPrimary

**Default:** `rgb(64, 255, 67)` (neon green)

**Used For:**
- Terminal Dashboard canvas elements
- Input lines and prompts
- Ring gauge fills
- Sparkline chart lines
- Glowing accent lines
- Active status indicators
- Buttons (hover glow & selected state)
- Terminal Image tint

**This is the key token** that defines SYNTHEX's retro-futuristic look.

### TerminalSecondary

**Default:** `rgb(217, 186, 154)` (warm tan)

**Used For:**
- Terminal output text
- Secondary labels inside Terminal Dashboard
- Decorative accents

### TerminalLines

**Default:** `rgba(222, 233, 250, 0.2)` (light blue, semi-transparent)

**Used For:**
- Dashed border lines between Terminal Dashboard panels
- Header and footer separator lines

## Brand Colors

Global brand identity colors used in buttons, links, badges, and non-terminal UI elements. Independent from Terminal colors.

### BrandPrimary

**Default:** `rgb(0, 207, 0)` (bright green)

**Used For:**
- Active navigation states
- Highlighted links
- Badge backgrounds
- Section accents

### BrandSecondary

**Default:** `rgb(222, 168, 111)` (warm accent)

**Used For:**
- Secondary decorative details
- Warm highlight elements

## Background & Text Colors

Foundation colors for layout and typography.

### Background Colors

| Token | Default | Used For |
|-------|---------|----------|
| **BackgroundBase** | `rgb(42, 49, 71)` | Main page background |
| **BackgroundElevated** | `rgb(21, 22, 36)` | Elevated surfaces (cards, panels) |
| **BackgroundTop** | `rgb(28, 29, 44)` | Header and top bar |
| **BackgroundCanvas** | `rgb(18, 20, 32)` | Canvas/viewport background |

### Text Colors

| Token | Default | Used For |
|-------|---------|----------|
| **TextPrimary** | `rgb(225, 230, 247)` | Main body text |
| **TextSecondary** | `rgb(129, 137, 163)` | Secondary/muted text |
| **TextMuted** | `rgb(90, 94, 120)` | De-emphasized text, labels |
| **TextError** | `rgb(255, 105, 51)` | Error states, warnings |

## Terminal vs Brand — What's the Difference?

**Terminal tokens** drive the retro CRT aesthetic. They're used in:
- Code components (Terminal Dashboard, ROI Calculator, 404 Game)
- Buttons and interactive elements
- Decorative effects

**Brand tokens** drive broader site accents like:
- Navigation states
- Badges
- Links

You can set them to **the same color** for a unified look, or keep them **different for contrast**.

## How to Change Colors

### Step 1: Open Color Styles

In Framer:
1. Click **Assets** (left sidebar)
2. Select **Color Styles**

### Step 2: Find the Token

Look for the token you want to change:
- To change the main neon accent: `/Terminal/TerminalPrimary`
- To change navigation states: `/Brand/BrandPrimary`
- To change body text: `/Text/TextPrimary`

### Step 3: Click the Color

Click the color swatch to open the color picker.

### Step 4: Choose Your Color

- Use the color picker to select your color
- Or paste a hex code (e.g., `#00FF00`)
- For RGB: `rgb(0, 255, 0)`

### Step 5: Apply & Publish

All elements using that token update **instantly** across the entire site.

Click **Publish** to make it live.

## Advanced: Light & Dark Mode

Each color token can have separate values for light and dark themes:

- Click a color token
- Look for **Light** and **Dark** variants
- Set different colors for each mode
- Framer auto-switches based on system preference

## Color Accessibility

When choosing colors, consider:

- **Contrast ratio** — Ensure text is readable (WCAG AA minimum: 4.5:1 contrast)
- **Colorblind safe** — Test with colorblind simulators
- **Dark mode** — Make sure colors work in both light and dark modes

:::tip
Test your color changes on both light and dark modes before publishing.
:::

## All Color Tokens Reference

### Terminal Group
- `/Terminal/TerminalPrimary`
- `/Terminal/TerminalSecondary`
- `/Terminal/TerminalLines`

### Brand Group
- `/Brand/BrandPrimary`
- `/Brand/BrandSecondary`

### Background Group
- `/Background/BackgroundBase`
- `/Background/BackgroundElevated`
- `/Background/BackgroundTop`
- `/Background/BackgroundCanvas`

### Text Group
- `/Text/TextPrimary`
- `/Text/TextSecondary`
- `/Text/TextMuted`
- `/Text/TextError`

## Next Steps

→ [Typography](/synthex/design/typography)
