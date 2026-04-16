# NotFoundGame (404 Page)

A fully playable retro arcade game that turns the 404 page into an engaging experience instead of a dead end.

## Overview

When visitors hit a missing page, they're welcomed with a **fully playable arcade game** instead of a boring error message.

**Features:**
- Two-phase gameplay
- Desktop (keyboard) and mobile (touch) controls
- Fully customizable text and colors
- Scores tracking
- Retro pixel art aesthetic

## Gameplay

### Phase 1: Destroy the 404

Shoot and destroy the pixel "404" letters floating on screen.

- Use arrow keys / WASD to move
- Spacebar to shoot
- Destroy all "404" letters to advance

### Phase 2: Scrolling Shooter

Navigate through waves of enemies, dodge attacks, and survive.

- Dodge incoming fire
- Destroy enemy ships
- Reach **2000 points** to win
- Hit by 3 enemies → Game Over

## Controls

### Desktop

| Control | Action |
|---------|--------|
| **Arrow Keys** or **A/D** | Move left/right |
| **Spacebar** | Shoot |
| **Spacebar** (idle/gameover) | Start game |

### Mobile

| Control | Action |
|---------|--------|
| **Tap anywhere** | Start game |
| **Hold & drag** left/right | Move ship |
| **Auto-shoot** while holding | Bullets fire automatically |

## Property Controls

### Text

All displayed text is customizable:

| Property | Default | Use |
|----------|---------|-----|
| **Title** | "Page Not Found" | Main heading |
| **Subtitle** | "But here's a game instead!" | Subheading |
| **Game Over Text** | "Game Over" | End screen message |
| **Win Text** | "You Win!" | Victory message |
| **CTA** | "Try Again" | Button text on end screen |

### Colors

Customize the arcade aesthetic:

| Property | Default | Controls |
|----------|---------|----------|
| **Accent Color** | `#40ff43` | Ship, bullets, primary UI |
| **Enemy Color** | `#ff6633` | Enemy ships, "404" digits |
| **Background** | `#0d0d14` | Game canvas background |
| **Text Color** | `#ffffff` | All text on screen |

## Customization Examples

### Minimal Branding

```
Title: "That page doesn't exist"
Subtitle: "Play our game while you figure things out"
CTA: "Go Home"
Colors: Use your brand colors
```

### Themed for Your Agency

```
Title: "Houston, we have a problem"
Subtitle: "Your mission: navigate the asteroid field"
Game Over Text: "Mission Failed. Try Again."
Win Text: "Mission Accomplished!"
CTA: "Return to Base"
Accent Color: Your brand primary
```

### Minimal Game

Keep text short for faster gameplay:

```
Title: "404"
Subtitle: "Lost?"
Game Over Text: "Oops"
Win Text: "Nice!"
CTA: "Back"
```

## How to Edit Text

1. Click the NotFoundGame component on the `/404` page
2. Open **Properties panel** (right sidebar)
3. Find the text property you want to change
4. Edit the text directly
5. Changes appear instantly in preview

## How to Change Colors

1. Click the NotFoundGame component
2. Open **Properties panel** → **Colors**
3. Click each color to open the color picker
4. Choose your colors
5. Game visuals update instantly

## Desktop vs Mobile Gameplay

The game automatically detects device type:

- **Desktop** — Full keyboard controls, 1080p gameplay
- **Mobile** — Touch controls, responsive sizing

No configuration needed — it just works.

## Scoring

### Points Per Action

- **Destroy "404" letter** — 100 points
- **Destroy enemy ship** — 200 points
- **Survive 30 seconds** — 50 bonus points

### Winning

- **2000 points** → Victory screen
- Advance to next level (optional progression)

### Losing

- **Hit 3 times** → Game Over
- Score freezes at loss

## Performance

The game uses Canvas rendering for smooth 60fps gameplay:

- Optimized for all screen sizes
- Minimal CPU impact
- Touch support without lag
- Auto-pauses when browser tab loses focus

## Mobile Considerations

On mobile:
- Larger touch targets
- Responsive game area sizing
- Auto-scaling for different screen heights
- Landscape mode recommended for best experience

## Accessibility

- **Keyboard only** — Full keyboard controls available
- **Touch alternative** — Works without keyboard
- **High contrast** — All colors have sufficient contrast
- **Clear feedback** — Visual/audio cues for actions

## Variations

### Endless Mode

```javascript
Win Text: "Level Complete"
Enable: Endless progression (each level harder)
```

### Timed Challenge

```javascript
Add: Timer display (30 seconds)
Goal: Highest score in 30 seconds
```

### Score Leaderboard

```javascript
Track: Scores submitted to database
Display: Top scores on page
```

:::tip
These require custom modifications. Contact support for advanced game modes.
:::

## Troubleshooting

**Game not responding to controls?**
- Make sure component is selected (click it)
- Test in preview or published mode
- Check browser console for errors

**Text not showing?**
- Verify text isn't blank
- Check text color contrasts with background
- Make sure text field is populated

**Colors not applying?**
- Use valid hex codes or RGB values
- Test color in preview to confirm
- Clear browser cache if colors seem wrong

**Mobile controls not working?**
- Test on actual mobile device
- Ensure you can hold and drag
- Disable browser's auto-zoom if it interferes

## Next Steps

→ [Terminal Image](/synthex/components/terminal-image)

→ [Other Components](/synthex/components/other)
