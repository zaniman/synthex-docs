# Pricing Collection

The Pricing collection controls the feature comparison table on your `/pricing` page.

## How It Works

The pricing page displays a **three-column comparison table** with plan features. Each CMS item creates one row in the table.

![Pricing](/images/guide/synthexa-26.png)

You can:
- Add **feature rows** showing what's included in each plan
- Add **section headers** to group features by category

## Fields

### General Info

| Field | Type | Notes |
|-------|------|-------|
| **Name** | String | Feature name or section header (e.g., "API Access", "Integrations") |
| **Type** | Enum | **Section** = category group header, **Feature** = comparable row across all plans |
| **Tooltip** | String | Optional hint text shown on hover next to the feature name. Leave empty to skip |

### Plan 1, Plan 2, Plan 3

For each plan column, configure:

| Field | Type | Notes |
|-------|------|-------|
| **Info (Plan X)** | String | Text shown in this plan's cell. Only visible when "Show Icon" is turned off |
| **Show Icon (Plan X)** | Boolean | Turn **Yes** to display an icon (✓ or ✗), **No** to show the Info text |
| **Icon (Plan X)** | Enum | Pick **✓** for included or **✗** for not included. Only applies when "Show Icon" is on |

### Not Relevant

| Field | Type | Notes |
|-------|------|-------|
| **Slug** | String | Auto-generated, you can ignore it |

## Example Feature Row

**Feature: "Custom Integrations"**

| Field | Value |
|-------|-------|
| Name | Custom Integrations |
| Type | Feature |
| Tooltip | Connect to any third-party API |
| Info (Plan 1) | — |
| Show Icon (Plan 1) | Yes |
| Icon (Plan 1) | ✗ |
| Info (Plan 2) | Custom |
| Show Icon (Plan 2) | No |
| Icon (Plan 2) | — |
| Info (Plan 3) | Unlimited |
| Show Icon (Plan 3) | No |
| Icon (Plan 3) | — |

**Result in table:**
| Feature | Plan 1 | Plan 2 | Plan 3 |
|---------|--------|--------|---------|
| Custom Integrations | ✗ | Custom | Unlimited |

## Example Section Header

**Section: "Integration & API"**

| Field | Value |
|-------|-------|
| Name | Integration & API |
| Type | Section |
| Tooltip | (empty) |

:::tip
When **Type is "Section"**, you **don't need to fill in** the Plan 1/2/3 fields (Info, Show Icon, Icon). Just set the Name and Type, and leave the rest empty. The section header will appear as a category divider in the pricing table.
:::

## Icon vs Text

Choose how to display each plan's offering:

- **Show Icon = Yes** → Displays ✓ (included) or ✗ (not included) as a symbol
- **Show Icon = No** → Displays the Info text (e.g., "Custom", "Unlimited", "$99/mo")

This flexibility lets you show:
- Simple checkmarks/crosses for basic yes/no features
- Descriptive text for features with variations (e.g., different limits per plan)

## Adding Pricing Features

1. Open **CMS panel** → **Pricing**
2. Click **New Item**
3. Fill in the **Name** and **Type** (Feature or Section)
4. For each plan, decide:
   - **Show Icon**: Yes (for ✓/✗) or No (for custom text)
   - **Icon**: ✓ or ✗ (if Show Icon is Yes)
   - **Info**: Text like "Custom", "Unlimited", "$99/mo" (if Show Icon is No)
5. Click **Save**

## Editing Plan Names & Pricing

The plan names and CTA buttons in the comparison table are edited through the **ComparisonTable** component:

### Editing Plan Names

1. Go to the **Pricing** page
2. In the **Layers panel** (left sidebar), select **ComparisonTable** — or click the comparison table once on the canvas

![ComparisonTable in Layers](/images/guide/synthexa-27.png)

3. Open the **Properties panel** (right sidebar)
4. In the **ComparisonTable** section, enter or update the plan names for Plan 1, Plan 2, Plan 3

![Plan Name](/images/guide/synthexa-28.png)

### Editing Plan CTA Buttons

To edit the buttons at the bottom of the comparison table:

1. With **ComparisonTable** selected in Layers (or after clicking it on canvas), go to the **Properties panel**
2. Click **Edit Component** (in the ComparisonTable section or at the top of Properties)
3. The component enters edit mode. Make sure you're viewing the **Desktop | Primary** variant (visible in the top-left toolbar) so your button changes inherit to other component variants
4. Select the button for the plan you want to modify (click on canvas or select in Layers)
5. In the **Properties panel**, update:
   - **Label** — The button text (e.g., "Get Started")
   - **Icon** — Show or hide an icon next to the button text
   - **Link** — The URL the button links to

:::tip
Plan prices, descriptions, and the main card layout are part of the Pricing page design. Adjust these directly on the canvas as needed. The CMS Pricing collection only controls the comparison table **rows** (features), not the plan cards themselves.
:::

## Tips

- **Keep names short** — One or two words for table readability
- **Use sections wisely** — Group related features with "Section" headers
- **Mix icons and text** — Use ✓/✗ for simple yes/no, text for nuanced differences
- **Update regularly** — When plans change, update both the CMS and canvas

## Next Steps

→ [How to Edit CMS Content](/synthexa/guide/cms-edit)
