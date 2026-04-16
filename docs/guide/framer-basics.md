# Framer Basics

Key areas of the Framer editor you'll use to customize SYNTHEX.

## 🎨 Canvas

The main workspace where you see and interact with your website design.

- **Single-click** to select an element
- **Double-click** to edit text directly
- **Drag** to move or resize elements
- **Right-click** for context menu

## 📑 Pages Panel (Left Sidebar)

Displays all pages in your project. Use this to navigate between:

- Static pages (Homepage, About, Pricing, Contact, etc.)
- CMS-driven pages (Blog post templates, Case templates, Job templates)

Click any page to open it for editing.

## 📋 CMS Panel (Left Sidebar Tab)

Manage dynamic content without touching the design:

- **Create new entries** for Blog, Cases, Open Roles, Pricing, Legal
- **Edit existing items** — all connected pages auto-update
- **Changes are live** after your next publish

:::tip
Create Authors and Categories BEFORE Blog posts, since blog posts reference them.
:::

## ⚙️ Properties Panel (Right Sidebar)

When an element is selected, the Properties panel shows all editable settings:

- **Text** — Font, size, color, alignment
- **Spacing** — Padding, margin, gap
- **Fill** — Background color or gradient
- **Stroke** — Border color, thickness, style
- **Corners** — Border radius
- **Effects** — Shadow, blur, opacity
- **Component props** — For code/design components (e.g., Terminal Dashboard settings)

## 🎨 Color Styles (Assets Panel)

Design tokens that control colors across your entire site.

**How to access:**
1. Click **Assets** in the left sidebar
2. Select **Color Styles**
3. Find and click the color token you want to change

**Key tokens:**
- `/Terminal/TerminalPrimary` — Main neon accent (buttons, active states, glows)
- `/Terminal/TerminalSecondary` — Secondary terminal color
- `/Brand/BrandPrimary` — Navigation states, badges
- `/Background/*` and `/Text/*` — Layout foundations

:::warning
Changing a color token updates EVERY element using it across the entire site instantly.
:::

## 📝 Text Styles (Assets Panel)

Global typography definitions. Update once, change everywhere.

- `/Heading 1–6` — All headline sizes
- `/Body/BodyRegular` — Standard body text
- `/Mono/MonoRegular` — Terminal/UI labels

## 🖼️ Components (Assets Panel)

Reusable design and code components. Click **Assets** → **Components** to browse:

- **Framer components** — Fully editable design elements
- **Code components** — Interactive elements (Terminal Dashboard, ROI Calculator)

Drag a component onto the canvas to insert it.

## Next Steps

Now that you understand the Framer editor, let's explore the pages:

→ [Pages Overview](/synthex/guide/pages-overview)
