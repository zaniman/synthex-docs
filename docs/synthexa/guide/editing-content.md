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

![Text Edit Properties](/images/guide/synthexa-12.png)

1. **Click** the text element (single-click)
2. Open the **Properties panel** (right sidebar)
3. Look for the **Content** field
4. **Edit** the text directly there

## Changing Text Styles

All text in SYNTHEXA uses **global Text Styles**. 

![Text Style Edit](/images/guide/synthexa-13.png)

**To update a style:**
1. Go to **Assets** → **Text Styles**
2. Find the style (e.g., `/Heading 1`, `/Body/BodyRegular`)
3. Click to edit
4. Change font, size, weight, color
5. **All elements using that style update instantly** across the entire site

:::warning
Avoid changing individual element styles. Always edit the global Text Style instead — it keeps your site consistent.
:::

## Editing Specific Elements

### Navigation & Footer

1. Go to **Assets** → **Templates** → **MainTemplates**

![Text Style Edit](/images/guide/synthexa-14.png)

2. In the **Layers panel**, you will see the **Navigation** and **Footer** components

![Text Style Edit](/images/guide/synthexa-15.png)

3. To edit them, select the component in the layers and click **Edit Component** in the right Properties panel
   - Alternatively, you can **double-click** the component directly on the canvas

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

## Switching Themes (Dark & Light Mode)

SYNTHEXA includes **Light and Dark color schemes** that users can toggle on your live site. This allows visitors to choose their preferred viewing experience.

### How Users Switch Themes

Your site visitors can toggle between Light and Dark modes using the **theme toggle button** in the navigation bar.

![Theme Toggle Button](/images/guide/synthexa-01.png)

Simply click the toggle icon to switch between modes. The preference is saved in their browser, so they'll see their chosen theme each time they visit.

### Customizing the Themes

To modify the Light and Dark color schemes:

1. **Go to Assets** → **Colors** in Framer
2. Find color token groups:
   - **Terminal** — TerminalPrimary, TerminalSecondary, TerminalLines
   - **Background** — BackgroundHighlight, BackgroundTop, BackgroundElevated, BackgroundSurface, BackgroundBase, BackgroundCanvas
   - **Brand**, **Text**, **Others** — Additional tokens for your branding
3. Click on any token to edit the Light and Dark color variants
4. Your site updates automatically — both light and dark versions reflect the changes

:::tip
Use color tokens strategically — keep dark mode readable with sufficient contrast, and ensure light mode isn't too harsh on the eyes.
:::

### Hiding the Theme Toggle Button

If you want to remove the theme toggle from the navigation bar and let the theme automatically follow the user's OS settings:

1. Go to **Assets** panel (top left)
2. Click on **MainTemplate** component
3. Find and select the **Navigation** component
4. In the right sidebar, locate **Theme Switcher** setting
5. Set it to **Off**

![Theme Switcher Setting](/images/guide/synthexa-02.png)

The theme will now automatically switch based on the user's operating system preferences (Light or Dark mode).

:::info
When Theme Switcher is Off, visitors will see either Light or Dark theme based on their system settings. They won't have manual control to toggle themes.
:::

### Using Only One Theme

If you want your site to use only one color theme (e.g., always Dark mode):

1. Go to **Assets** → **Colors** in Framer
2. For each color token (TerminalPrimary, BackgroundBase, etc.), click to open it
3. Set the **Dark** and **Light** variants to the **same color**:
   - If you want **Light mode only** — copy your Light color values to the Dark slot
   - If you want **Dark mode only** — copy your Dark color values to the Light slot
4. Apply this to all tokens across Terminal, Background, Brand, Text, and Others groups

Now your site will look identical regardless of system settings or theme preference. All variants will use the colors you specified.

## Next Steps

For dynamic content management, check out:

→ [CMS Collections](/synthexa/guide/cms-overview)
