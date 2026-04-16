# Terminal Image

A Framer design component that wraps any photo inside a **retro CRT monitor frame** — complete with physical casing, corner bolt details, scanline effects, and glowing accent lines.

## Overview

The Terminal Image adds a vintage computer aesthetic to any photo. It's fully designed in Framer (not a code component), so you can edit every detail.

**What's Included:**
- CRT monitor frame with 3D beveled edges
- Bolts at all four corners
- Semi-transparent color tint overlay
- Scanline and noise effects
- Editable text labels (top-left, top-right, bottom-left, bottom-right)
- Two size variants (Regular and Small)

## Structure

The component has multiple layers:

### Monitor Frame
The outer casing that simulates a vintage CRT monitor.

### Photo Layer
Your image displayed inside the screen.

### Tint Overlay
A semi-transparent layer using `/Terminal/TerminalPrimary` that tints the photo to match the terminal accent color.

### CRT Effects
Scanline and noise overlay applied at 30% opacity inside the screen area.

### Labels
Four editable text fields:
- **Top Left** — e.g., "SYSTEM_IN.exe"
- **Top Right** — e.g., "v2.4"
- **Bottom Left** — e.g., "⚡ LIVE"
- **Bottom Right** — e.g., "1280×720"

## How to Replace the Photo

### Step 1: Click the Component

Single-click the Terminal Image on your canvas to select it.

### Step 2: Enter Component Edit Mode

Double-click or right-click → **Edit Component**

You'll see the internal structure:
```
Terminal Image (Frame)
├── Monitor Casing
│   ├── Outer Frame
│   ├── Screen Area
│   │   ├── Photo Layer
│   │   ├── Tint Overlay
│   │   └── Effects (Scanlines, Noise)
│   └── Bolts (4)
└── Labels (4 text layers)
```

### Step 3: Navigate to Photo Layer

Inside the component:
1. Find the **Photo layer**
2. It's usually nested under **Screen Area** or **Display**
3. Single-click it to select it

### Step 4: Replace the Image

In the **Properties panel** (right sidebar):
1. Look for the **Image** field
2. Click **Replace**
3. **Upload** your photo

Your photo is now tinted and framed within the CRT monitor.

### Step 5: Exit Component Edit

Click outside the component or press **Escape** to go back to normal editing.

## Editing Labels

You can edit the four text labels directly on the canvas:

1. **Enter edit mode** (double-click the component)
2. **Double-click** the text label you want to change
3. **Type** your new text
4. **Click outside** to finish

**Example labels:**
```
Top Left:    "workflow_scan.exe"
Top Right:   "v2.4 LIVE"
Bottom Left: "⚡ 100%"
Bottom Right: "1920×1080"
```

## Size Variants

The Terminal Image comes in two sizes:

| Variant | Dimensions | Use |
|---------|-----------|-----|
| **Regular** | 1060×626px | Full-width sections, hero areas |
| **Small** | 522×308px | Sidebar, smaller sections |

**To change size:**
1. Click the component (outer frame)
2. Properties panel → look for **Size** or **Variant**
3. Select Regular or Small

## Color Tint

The photo is tinted with `/Terminal/TerminalPrimary`:

- Change this color token → all Terminal Images update
- Default: neon green `rgb(64, 255, 67)`
- Adjust opacity of tint overlay layer if too strong

**To adjust tint opacity:**
1. Enter component edit mode
2. Find the **Tint Overlay** layer
3. Change **Opacity** in Properties (0–1 scale)
4. Lower opacity = more visible photo, less tint

## CRT Effects

Scanline and noise overlays give the authentic retro monitor look:

- **Scanlines** — Horizontal lines across the screen
- **Noise** — Fine grain texture
- **Opacity** — 30% by default (adjust if needed)

**To adjust effects:**
1. Enter component edit mode
2. Find **Effects layer** or **Scanlines**
3. Adjust **Opacity** to 0–100%
4. 0% = no effects, 100% = very strong effects

## Image Optimization

### Best Practices

- **Size** — Export at 2× resolution (e.g., 2120×1252px for Regular)
- **Compress** — Compress to under 500KB
- **Format** — JPEG for photos, PNG for graphics
- **WebP** — Use WebP if possible (better compression)

### Aspect Ratio

Make sure your image matches the frame aspect ratio:

- **Regular** — 1060×626px (1.69:1)
- **Small** — 522×308px (1.69:1)

If your photo is a different aspect ratio, it may be stretched. Crop or resize first.

## Advanced: Editing the Frame

If you want to customize the monitor frame itself:

1. Enter component edit mode
2. Find **Monitor Casing** frame
3. Edit the shape, colors, or details
4. Adjust bolt positions if needed

This requires knowledge of Framer design. For simpler use, just replace the photo.

## Mobile Responsiveness

The Terminal Image is responsive:

- **Desktop** — Regular size (1060×626px)
- **Tablet** — Medium size (~800×470px)
- **Mobile** — Small size (522×308px) or scaled down

Framer handles responsive scaling automatically.

## Multiple Terminal Images

Use multiple Terminal Images on the same page to showcase different projects:

1. Duplicate the component (right-click → Duplicate)
2. Change the photo for each
3. Update labels if needed
4. Arrange on canvas

All instances use the same design, so they stay consistent.

## Troubleshooting

**Photo looks distorted?**
- Check aspect ratio matches frame
- Crop photo to correct dimensions before uploading
- Use **Fill** (not **Stretch**) for image mode if available

**Tint too strong?**
- Enter component edit mode
- Reduce tint overlay opacity
- Make the tint layer more transparent

**Scanlines too prominent?**
- Find Effects layer
- Reduce opacity to 10–20%

**Labels not showing?**
- Make sure text color contrasts with background
- Increase font size if text is too small
- Check text isn't outside component bounds

## Next Steps

→ [Other Components](/synthex/components/other)
