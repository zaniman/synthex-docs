# Other Components

SYNTHEX includes several additional design components beyond Terminal Dashboard, ROI Calculator, and Terminal Image.

## Number Flow

Smooth animated number transitions.

**Use Cases:**
- Statistics sections (grow from 0 to final value)
- Metrics display
- Count-up animations

**How to Use:**
1. Drag the component onto your canvas
2. Click to select it
3. Properties panel → enter your **Number** value
4. Component animates from 0 to that number on mount
5. Customize **Duration** and **Animation Style**

**Properties:**
- **Number** — Final value to animate to
- **Duration** — How long the animation takes (500ms–2000ms)
- **Format** — Number, currency, percentage
- **Font** — Use global Text Styles

**Example:**
```
400+ → Animates from 0 to 400 when page loads
"$2.5M" → Animates with currency format
"99%" → Displays as percentage
```

## Background Pattern

Configurable geometric background pattern for visual depth.

**Use Cases:**
- Section backgrounds
- Page background
- Subtle visual interest without distraction

**How to Use:**
1. Add to the background of a Section or Frame
2. Set as background fill
3. Adjust opacity if too prominent

**Properties:**
- **Pattern Type** — Grid, Dots, Lines, Waves, etc.
- **Scale** — Size of pattern elements
- **Opacity** — Transparency (0–100%)
- **Color** — Primary pattern color

**Tips:**
- Lower opacity (20–40%) keeps it subtle
- Test on both light and dark backgrounds
- Avoid high contrast patterns (can distract)

## Theme Toggle

Light/dark mode switcher component.

**Use Cases:**
- Navigation bar
- Settings section
- Top bar UI element

**How to Use:**
1. Drag onto your page (usually in navigation)
2. Click to select it
3. Component syncs with Framer's theme system
4. Clicking toggles light/dark mode site-wide

**Properties:**
- **Label** — Custom toggle label
- **Icons** — Sun/moon or custom icons
- **Position** — Inside nav bar or standalone

**Features:**
- Remembers user preference
- Saves to local storage
- Works with all color tokens
- Automatic light/dark variants

## Terminal Effects

CRT scanline and noise overlay.

**Use Cases:**
- Full-page effect (retro aesthetic)
- Section background (terminal feel)
- Video or image overlay

**How to Use:**
1. Add as a frame or overlay
2. Set **Pointer Events** to "none" so it doesn't block interaction
3. Adjust opacity for subtle effect

**Properties:**
- **Scanlines** — Horizontal line frequency
- **Noise** — Grain texture intensity
- **Opacity** — Overall effect strength (20–50% for subtle look)

**Tip:**
Set to 30% opacity for authentic CRT look without overwhelming content.

## Nav

Responsive navigation bar with logo, menu items, CTA button, and mobile hamburger menu.

**Includes:**
- Logo on left
- Menu items (Home, About, Services, etc.)
- CTA button (Contact, Get Started, etc.)
- Mobile hamburger menu
- Auto-responsive at breakpoints

**How to Use:**
1. Component is likely already in place on pages
2. Click to select it
3. Double-click to edit menu items
4. Update links to point to your pages
5. Change CTA button text and link

**Customization:**
- Edit menu item text
- Change link URLs
- Update CTA button color and text
- Adjust logo
- Customize hover/active states

## Footer

Site-wide footer with logo, navigation columns, social links, and legal page links.

**Includes:**
- Company logo on left
- Navigation columns (Links, Services, Company)
- Social media links (Twitter, LinkedIn, GitHub, etc.)
- Legal page links (Privacy, Terms)
- Copyright text

**How to Use:**
1. Footer is usually at bottom of all pages
2. Click to select it
3. Edit text, links, social icons directly

**Customization:**
- **Logo** — Replace with your logo
- **Navigation links** — Update to your pages
- **Social links** — Add/remove icons and URLs
- **Copyright** — Update company name and year
- **Legal links** — Points to `/legal/:slug` pages

**Features:**
- Auto-pulls legal pages from CMS
- Responsive column stacking on mobile
- Social links in icons or text

## Common Customizations

### Update Number Flow Values

Many sections use Number Flow for stats:

```
1. Click the number
2. Properties panel → **Number** field
3. Change value (e.g., from 50 to 150)
4. Animation updates on next page load
```

### Change Pattern Background

On sections with patterns:

```
1. Click the section
2. Properties panel → **Fill** (or find Background Pattern)
3. Adjust **Opacity** (lower = more subtle)
4. Change **Scale** if pattern too large/small
```

### Customize Theme Toggle

If you have a theme toggle:

```
1. Click the toggle component
2. Properties panel → **Label**
3. Change toggle text if needed
4. Customize colors to match your theme
```

### Update Footer Links

Edit footer navigation:

```
1. Click the footer
2. Enter component edit mode (double-click)
3. Find link text elements
4. Double-click to edit link text
5. Click link → Properties → update **Link** URL
```

## Best Practices

- **Consistency** — Use components throughout the site for cohesive design
- **Restraint** — Don't overuse patterns or effects
- **Testing** — Test components on mobile and desktop
- **Color tokens** — Use color tokens in components so they update globally
- **Responsiveness** — All components adapt to screen size automatically

## Troubleshooting

**Component not showing?**
- Check visibility (eye icon in layers)
- Verify component has content/isn't empty
- Make sure z-index isn't hiding it

**Animation not playing?**
- Check animation is enabled in properties
- Verify component is visible on page load
- Refresh page to reset animation state

**Links not working?**
- Double-click the component to edit
- Check link URL is correct
- Verify page exists (for internal links)

**Mobile layout broken?**
- All components are responsive by default
- If broken, adjust component width on mobile breakpoint
- Test on actual mobile device

## Next Steps

You now have a complete understanding of all SYNTHEX components!

Review the [Colors](/synthex/design/colors) and [Typography](/synthex/design/typography) sections to finalize your design system, then:

→ [Publish Your Site](/synthex/guide/publish)
