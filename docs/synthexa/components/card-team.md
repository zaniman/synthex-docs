# CardTeam

A team member card component that displays a profile photo with name and role. Photos are automatically tinted with TerminalPrimary and enhanced with CRT monitor effects (scanlines and noise).

![CardTeam](/images/guide/synthexa-103@2x.png)

## How to Edit

To customize CardTeam:

1. **Select the component** — Click CardTeam directly on the canvas, OR find it in the **Layers** panel and click its name
2. **Open Properties** — The Properties panel (right sidebar) displays all editable fields
3. **Make changes** — Edit any property and see changes update in real-time

## Property Controls

| Property | Type | Description |
|----------|------|-------------|
| **Photo** | Image | Team member's profile photo. Automatically tinted with `/Terminal/TerminalPrimary` color and enhanced with CRT scanlines and noise effects |
| **Name** | String | Team member's full name (e.g., "Ethan Mercer") |
| **Role** | String | Team member's position or title (e.g., "Founder & CEO") |

## Visual Effects

CardTeam applies terminal-themed visual effects to the photo via the [TerminalEffects](/synthexa/components/terminal-effects) component:

- **Color Tinting** — Photo is automatically tinted with the TerminalPrimary color token
- **Scanlines** — Horizontal lines simulate retro CRT monitor scanlines
- **Noise** — Subtle grain effect adds analog television aesthetic

These effects create a cohesive terminal aesthetic that matches the overall SYNTHEXA design system.

For advanced customization of the scanlines and noise effects, see the [TerminalEffects documentation](/synthexa/components/terminal-effects).

## Usage

CardTeam is used in:

- **Team pages** — Staff directory and team member profiles
- **About section** — Company founders and leadership
- **Leadership team** — Executive bios
- **Contact page** — Team member contact information
