# Pricing Collection

The Pricing collection controls the feature comparison table rows on your `/pricing` page.

## How It Works

The pricing page has **three plan columns** — Starter, Growth, and Custom — that are edited directly on the canvas.

The **feature rows** are managed via CMS. Each CMS item creates one row in the comparison table.

## Fields

| Field | Type | Notes |
|-------|------|-------|
| **Feature** | String | Feature name (e.g. "API Access", "Custom Integrations") |
| **Starter** | Boolean | Included in Starter plan? |
| **Growth** | Boolean | Included in Growth plan? |
| **Custom** | Boolean | Included in Custom plan? |

## Example Features

| Feature | Starter | Growth | Custom |
|---------|---------|--------|--------|
| Up to 5 projects | ✓ | ✓ | ✓ |
| API access | ✗ | ✓ | ✓ |
| Custom integrations | ✗ | ✗ | ✓ |
| 24/7 support | ✗ | ✓ | ✓ |

## Adding Features

1. Open **CMS panel** → **Pricing**
2. Click **New Item**
3. Enter the feature name
4. Toggle which plans include it
5. Click **Save**

## Editing Pricing Plans

The **plan names, pricing, and descriptions** are edited directly on the `/pricing` canvas page:

1. Go to the **Pricing** page
2. Click on plan cards to edit text, prices, CTA buttons
3. No CMS needed for these elements

## Sorting Features

Features appear in the order they're created in the CMS. Reorder them by:

1. Opening each item in the CMS panel
2. Using drag-handle (if available) to reorder
3. Or delete and recreate in your desired order

## Tips

- **Keep names short** — One or two words for table readability
- **Logical grouping** — Group similar features together (e.g., all support features, all integration features)
- **Highlight differentiators** — Make sure the most important features are in Growth and Custom tiers
- **Update regularly** — When plans change, update the CMS

## Next Steps

→ [How to Edit CMS Content](/synthex/guide/cms-edit)
