# ROI Calculator

An interactive code component that estimates automation savings. Users adjust sliders in real-time to see cost-benefit calculations.

## Overview

The ROI Calculator demonstrates the value of automation by letting visitors input their team details and see potential savings.

**Key Features:**
- Interactive sliders for input parameters
- Real-time calculation of savings
- Customizable inputs and formulas
- Fully branded styling
- Mobile responsive

## Default Inputs

| Input | Default | Range | Unit |
|-------|---------|-------|------|
| **Team Size** | 12 | 1–100 | people |
| **Manual Work per Person** | 8 | 1–60 | hrs/week |
| **Avg Hourly Cost** | $55 | $10–$300 | per hour |
| **Rework & Errors** | 12% | 0–50% | percentage |

## Default Outputs

| Output | Format | Description |
|--------|--------|-------------|
| **You're Losing / Month** | Currency | Revenue lost to manual work |
| **You Could Save / Month** | Currency | Potential monthly savings |
| **Monthly Hours Lost** | Number | Total hours wasted on manual work |

## Customization

### Step 1: Select the Component

Click the ROI Calculator on your page.

### Step 2: Open Properties Panel

Open the Properties panel (right sidebar) to see customization options.

### Step 3: Configure Inputs

**Option A: Use Defaults**
- Leave **Inputs** set to "Default"
- Calculator uses the values above

**Option B: Custom Inputs**
- Set **Inputs** to "Custom"
- Define your own input fields and ranges
- Examples: "Projects handled", "Cost per project", "Automation budget"

### Step 4: Configure Outputs

**Option A: Use Defaults**
- Leave **Outputs** set to "Default"
- Shows the three predefined outputs

**Option B: Custom Outputs**
- Set **Outputs** to "Custom"
- Define what calculations to display
- Formula fields accept JavaScript expressions

### Step 5: Formulas

When using **Custom** inputs/outputs, you can write formulas using JavaScript:

**Example Formula:**
```javascript
teamSize * hoursPerWeek * hourlyRate * 4
```

This calculates: `12 * 8 * 55 * 4 = $21,120/month`

**Available Variables:**
- Input names from your custom inputs
- Standard JavaScript functions (Math.round, etc.)
- Comparison operators (>, <, ==)

### Step 6: Styling

Under **Appearance:**
- **Theme** — Light or dark variant
- **Colors** — Primary, secondary, background
- **Slider UI** — Default or custom (drop Framer components in slots)

## Example: Custom Calculator

**Goal:** Create a calculator for project pricing estimates.

### Inputs:
- `projectSize` — Small (0), Medium (1), Large (2)
- `teamCount` — 1–20 people
- `timelineWeeks` — 2–26 weeks

### Formulas:
```javascript
// Base cost by project size
baseCost = projectSize === 0 ? 5000 : projectSize === 1 ? 15000 : 40000

// Adjust for team size
teamMultiplier = 1 + (teamCount * 0.1)

// Adjust for timeline
timelineDiscount = Math.max(0.8, 1 - (timelineWeeks / 26))

// Final estimate
estimate = baseCost * teamMultiplier * timelineDiscount
```

## Advanced: Custom Slider UI

For full brand customization, you can:

1. Set **Slider UI** to "Custom"
2. Drop Framer components into:
   - **Track** — Background bar
   - **Fill** — Filled portion of bar
   - **Thumb** — Draggable handle
3. Style to match your design system

## Mobile Behavior

On mobile, the calculator:
- Stacks inputs vertically
- Shows one input per row
- Responsive slider sizing
- Touch-friendly interactions

## Responsive Sizing

The calculator scales responsively:
- Desktop: Full width with side-by-side layout
- Tablet: Reduced padding, centered
- Mobile: Full-width, stacked inputs

## Accessibility

- Keyboard navigation — Tab through inputs
- Screen reader friendly — Labels associated with inputs
- Focus states — Clear visual indication
- Sufficient contrast — Text readable on all themes

## Troubleshooting

**Sliders not working?**
- Check input range is valid (min < max)
- Verify formulas don't reference undefined variables
- Test in preview mode

**Formula errors?**
- Check for typos in variable names
- Use parentheses for complex expressions: `(a + b) * c`
- Avoid division by zero: `amount / Math.max(divisor, 1)`

**Custom components not showing?**
- Make sure you've inserted components in Track/Fill/Thumb slots
- Check component sizes fit the slider dimensions

## Common Formulas

### Monthly Savings
```javascript
(teamSize * hoursPerWeek * hourlyRate * 4) - automationCost
```

### Break-even Timeline
```javascript
automationCost / ((teamSize * hoursPerWeek * hourlyRate * 4) / 12)
```

### Annual ROI
```javascript
((teamSize * hoursPerWeek * hourlyRate * 52) - (automationCost * 12)) / (automationCost * 12) * 100
```

## Next Steps

→ [404 Game](/synthex/components/404-game)

→ [Terminal Image](/synthex/components/terminal-image)
