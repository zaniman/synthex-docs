# Editing Content

Learn how to edit text, images, and other content on your pages.

## Updating Text

### Method 1: Direct Canvas Editing

1. **Click** any text element on the canvas (single-click to select)
2. **Double-click** to enter edit mode
3. **Type** to replace the content
4. **Click outside** or press **Escape** to finish

Changes appear instantly on the canvas.

### Method 2: Properties Panel

1. **Click** the text element (single-click)
2. Open the **Properties panel** (right sidebar)
3. Look for the **Content** field
4. **Edit** the text directly there

## Changing Text Styles

All text in SYNTHEX uses **global Text Styles**. 

**To update a style:**
1. Go to **Assets** → **Text Styles**
2. Find the style (e.g., `/Heading 1`, `/Body/BodyRegular`)
3. Click to edit
4. Change font, size, weight, color
5. **All elements using that style update instantly** across the entire site

:::warning
Avoid changing individual element styles. Always edit the global Text Style instead — it keeps your site consistent.
:::

## Replacing Images

### Basic Image Replacement

1. **Click** the image on the canvas
2. Open the **Properties panel** (right sidebar)
3. Find the **Image** field
4. Click **Replace** → **Upload**
5. Choose your new image

### Best Practices for Images

- **Optimize size** — Export at 2× resolution, then compress to under 500KB
- **Use WebP** when possible — Better compression, faster loading
- **Check aspect ratio** — Make sure your image matches the frame size
- **Avoid over-large files** — Large images significantly slow page load

## Editing Specific Elements

### Navigation & Header
- Click logo or nav items to edit text/links
- Use Properties panel to change colors, sizes

### Hero Sections  
- Edit headline and subheadline with double-click
- Replace hero image via Properties panel
- Adjust CTA button text

### Blog/Cases Sections
- Don't edit these directly — use **CMS collections** instead
- Add blog posts and cases via the **CMS panel**

### Footer
- Edit footer text, links, and social icons directly on canvas

## Using Component Properties

For components like **Terminal Dashboard**, **ROI Calculator**, etc., don't edit the internals. Instead:

1. **Click the component** (single-click to select the whole component)
2. Open **Properties panel** (right sidebar)
3. Look for **property controls** (sliders, dropdowns, color pickers)
4. Adjust the properties to customize the component

:::tip
Editing component internals breaks them. Always use the property controls in the Properties panel.
:::

## Undo & Redo

- **Undo** — `Cmd+Z` (Mac) or `Ctrl+Z` (Windows)
- **Redo** — `Cmd+Shift+Z` (Mac) or `Ctrl+Shift+Z` (Windows)

## Next Steps

For dynamic content management, check out:

→ [CMS Collections](/synthex/guide/cms-overview)
