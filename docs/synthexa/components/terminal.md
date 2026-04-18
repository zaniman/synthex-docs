# TerminalDashboard

![Terminal Component](/images/guide/synthexa-37.png)

The signature component of SYNTHEXA — a fully animated multi-panel data visualization widget with a CRT terminal aesthetic.

Used in the homepage hero and across the site to showcase metrics, status, and automation workflows.

## Overview

The TerminalDashboard is a **code component** that renders:
- Multi-panel layouts with configurable panels (1–6)
- Animated typewriter text (Terminal panel)
- Data visualizations (Sparkline, Bars, Ring, Status)
- Metrics tiles with labels
- SVG rendering for custom graphics
- Customizable colors and animations
- Full responsive design

## Property Controls

### Appearance

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Colors** | Object | Project tokens | Color overrides for Primary, Secondary, Lines, Background |
| **Font Scale** | Slider | 12px | Base font size for all dashboard text |
| **Animation** | Enum | Loop | Loop (continuous) or Once (play once on mount) |
| **Fade** | Toggle | On | Fade-in animation on component mount |

### Content

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Labels** | Object | See below | Header/footer label strings |
| **Panels** | Number | 6 | Number of active panels (1–6) |
| **Panel Order** | String | Empty | Reorder panels (e.g., "3,1,2") |

### Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Layout** | Enum | Auto | Preset layout: Auto, Stacked, Inline, Equal halves, Wide left, Wide right |

### Individual Panels

Each Panel (1–6) has common properties:

| Property | Type | Description |
|----------|------|-------------|
| **Type** | Enum | Terminal, Bars, Ring, Sparkline, Status, SVG, None |
| **Title** | String | Optional panel header |
| **Height** | Enum | Fill (stretch to available space), Fit (to content), or Fixed |

**Panel-specific properties appear below based on the Type selected.**

## Panel Types

### Terminal

Animated typewriter with input/output lines.

| Property | Type | Description |
|----------|------|-------------|
| **Speed** | Slider | Animation speed (1 = normal, higher = faster) |
| **Script** | Text | Multiline terminal script |
| **Lines** | Array | Individual lines (auto-generated from Script) |

**Script format:**
- Lines starting with `> ` render as input (Primary color)
- Other lines render as output (Secondary color)

**Example:**
```
> synthex --scan --client=acme_corp
Connecting to 4 systems...
  [✓] CRM: Salesforce
  [✓] Email: Mailchimp
  [✓] Docs: Notion
  [✓] Chat: Slack
Automation complete // 4h saved this month
```

### Sparkline

Animated dual-line canvas chart for showing trends.

| Property | Type | Description |
|----------|------|-------------|
| **Sparklines** | Array | Collection of sparkline data series (max 2) |

Each sparkline item contains:
- **Label** — Legend label for the line
- **Data** — Array of numbers (0–100) representing the trend

### Bars

Animated horizontal bar chart for comparing percentages.

| Property | Type | Description |
|----------|------|-------------|
| **Bars** | Array | Collection of bar items (max 6) |

Each bar item contains:
- **Label** — Bar label
- **Value** — Numeric value (0–100 for percentage display)

### Status

Live status list with pulsing indicators.

| Property | Type | Description |
|----------|------|-------------|
| **Status Items** | Array | Collection of status indicators (max 7) |

Each status item contains:
- **Label** — Status label
- **State** — Status state (Active, Idle, Running, Error)

### Metrics

Key metric tiles with label + value.

| Property | Type | Description |
|----------|------|-------------|
| **Metrics** | Array | Collection of metric items (max 6) |
| **Columns** | Slider | Number of columns (1–3) for layout |

Each metric item contains:
- **Label** — Metric label (e.g., "Processes running")
- **Value** — Metric value (e.g., "247" or "99.97%")

### Ring

Animated circular gauge. Single and Dual mode.

| Property | Type | Description |
|----------|------|-------------|
| **Ring Mode** | Enum | Single (one ring) or Dual (two concentric rings) |
| **Ring 1 %** | Slider | First ring percentage (0–100) |
| **Ring 1 Label** | Text | Label for first ring |
| **Ring 2 %** | Slider | Second ring percentage (0–100, Dual mode only) |
| **Ring 2 Label** | Text | Label for second ring (Dual mode only) |

### SVG

Render custom SVG graphics with optional color theming.

| Property | Type | Description |
|----------|------|-------------|
| **SVG Code** | Text | Raw SVG markup |
| **Apply Color** | Toggle | Apply Primary color accent to SVG |
| **Scale** | Slider | SVG scale factor (0.5–2) |
| **Padding** | Slider | Padding around SVG (0–32px) |

**Tips:**
- Paste complete `<svg>` tags into SVG Code
- Enable "Apply Color" to tint the SVG with the Primary token color
- Use Scale to resize the SVG within the panel
- Padding adds space around the SVG content

### None

Empty panel — use to disable a slot or add intentional whitespace.

## Layout Presets

### Auto

Automatically arranges panels based on count and aspect ratios.

### Stacked

Panels stack vertically.

```
┌────────┐
│ Panel1 │
├────────┤
│ Panel2 │
├────────┤
│ Panel3 │
└────────┘
```

### Inline

Panels arrange horizontally.

```
┌────┬────┬────┐
│ P1 │ P2 │ P3 │
└────┴────┴────┘
```

### Equal Halves

Two columns of equal width.

```
┌────┬────┐
│ P1 │ P2 │
├────┼────┤
│ P3 │ P4 │
└────┴────┘
```

### Wide Left / Wide Right

Asymmetric layout (1 large + 2 small panels).

```
Wide Left:           Wide Right:
┌────┬────┐         ┌────┬────┐
│    │ P2 │         │ P2 │    │
│ P1 ├────┤   OR    ├────┤ P1 │
│    │ P3 │         │ P3 │    │
└────┴────┘         └────┴────┘
```

### Custom Layout

Enter a custom split string (e.g., `2|1` for 2 columns on left, 1 on right).

## Colors

| Field | Default Token | Controls |
|-------|----------------|----------|
| **Primary** | `/Terminal/TerminalPrimary` | Canvas elements, input lines, active indicators |
| **Secondary** | `/Terminal/TerminalSecondary` | Output lines, labels |
| **Lines** | `/Terminal/TerminalLines` | Panel borders |
| **Background** | `/Background/BackgroundBase` | Component background |

## Animation Settings

### Loop

Animations repeat continuously:
- Typewriter loops
- Sparkline updates every 2–3 seconds
- Bars pulse
- Status indicators pulse

### Once

Animations play once on component mount:
- Typewriter plays once, then freezes
- Bars animate once to final state
- Status stays static
- Ring gauges animate once to percentage

### Fade

Fade-in animation when component mounts:
- **On** — Component fades in over 0.8 seconds
- **Off** — Component appears instantly

## Panel Configuration Format

Each Panel field shows a summary:

```
Type, Title, SizeMode, Opacity
```

**Example:**
```
Terminal, Workflow Scan, Fit, 1.0
Sparkline, Resource Usage, Fill, 0.85
Ring, Memory, Fit, 0.9
```

## Responsive Behavior

On mobile:
- Panels reflow to vertical stack (Stacked layout)
- Font scales down automatically
- Reduced animations for performance
- Touch-friendly spacing

## Performance Tips

- **Limit panels** — 3–4 panels for optimal performance
- **Disable animations** — Set to "Once" or "Off" on lower-end devices
- **Reduce font scale** — Smaller fonts load faster
- **Simple layouts** — Avoid excessive nesting

## Common Configurations

### Simple Status Dashboard

```
Panels: 3
Layout: Stacked
- Panel 1: Status (Active services)
- Panel 2: Ring (99% uptime)
- Panel 3: Metrics (Key stats)
```

### Process Visualization

```
Panels: 2
Layout: Wide left
- Panel 1: Terminal (Workflow script)
- Panel 2: Sparkline (Performance over time)
```

### Metric Overview

```
Panels: 4
Layout: Equal halves
- Panel 1: Metrics (Team size)
- Panel 2: Ring (Capacity)
- Panel 3: Bars (Workload distribution)
- Panel 4: Status (System status)
```

## Troubleshooting

**Panel content not showing?**
- Make sure panel type is not "None"
- Check that data is properly configured
- Verify colors are visible against background

**Animations not playing?**
- Check Animation is set to "Loop" or "Once"
- Ensure Fade is "On" to see entrance animation
- Refresh page if animations freeze

**Text too small?**
- Increase Font Scale slider
- Adjust individual panel opacity if hard to read

## Next Steps

→ [ROICalculator](/synthexa/components/roi-calculator)

→ [NotFoundGame](/synthexa/components/404-game)
