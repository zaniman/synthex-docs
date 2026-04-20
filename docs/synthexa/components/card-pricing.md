# CardPricing & PricingPlans

A comprehensive pricing section component that displays tiered pricing plans with monthly/yearly toggle, customizable features, and responsive variants for desktop and mobile.

![CardPricing](/images/guide/synthexa-89@2x.png)

## Overview

**PricingPlans** is the main section component that includes:
- Section header with title and description
- Monthly/Yearly toggle switch
- Three pricing plan cards
- Responsive variants for desktop and mobile

**CardPricing** is an individual pricing plan card with:
- Plan name and description
- Monthly and yearly pricing
- Feature list with inclusion indicators
- CTA button with custom label and icon

## How to Edit

### Edit Section-Level Properties

To customize the pricing section header and layout:

1. **Select PricingPlans** on the canvas OR in the **Layers** panel
2. **Open Properties** — The Properties panel displays section settings
3. **Edit properties:**
   - **Prefix** — Visual prefix (e.g., "//")
   - **Section Label** — Section name (e.g., "pricing")
   - **Title** — Main heading (e.g., "Start saving this month")
   - **Description** — Section subtitle
   - **Background Pattern** — Toggle background pattern visibility
   - **Variant** — Switch between Yearly/Monthly/YearlyMobile/MonthlyMobile

   ![Edit Section-Level Properties](/images/guide/synthexa-90@2x.png)

### Edit with Edit Component

To access all section variants:

1. Click PricingPlans to select it
2. Click **Edit Component** button in Properties
3. You'll see 4 variants:
   - **Yearly** (Primary) — Desktop yearly view
   - **Monthly** — Desktop monthly view
   - **YearlyMobile** — Mobile yearly view
   - **MonthlyMobile** — Mobile monthly view

:::warning
**Always make pricing changes in the Yearly | Primary variant.** Changes automatically apply to all other variants (Monthly, YearlyMobile, MonthlyMobile).
:::

## Editing Pricing Cards

### Update Plan Information

To edit each plan:

1. **Important:** Always edit in the **Yearly | Primary** variant first
2. Click on the plan card (or select Plan1/Plan2/Plan3 in **Layers**)
3. In **Properties**, update:
   - **Title** — Plan name
   - **Description** — Plan description
   - **Monthly Price** / **Yearly Price** — Adjust with slider or type number
   - **Monthly Text** / **Yearly Text** — Price period text
   - **Button Label** — CTA text
   - **Link** — Button destination

![Update Plan Information](/images/guide/synthexa-91@2x.png)

| Property | Type | Description |
|----------|------|-------------|
| **Variant** | Dropdown | Select Yearly or Monthly pricing display |
| **Title** | String | Plan name (e.g., "Starter", "Growth", "Custom") |
| **Description** | String | Brief plan description |
| **Monthly Price** | Number | Price for monthly billing (slider input) |
| **Monthly Text** | String | Label below monthly price (e.g., "/ month") |
| **Yearly Price** | Number | Price for yearly billing (slider input) |
| **Yearly Text** | String | Label below yearly price (e.g., "/ month, billed annually") |
| **Button** | Dropdown | Button style (Primary / Secondary) |
| **Button Label** | String | CTA text (e.g., "Start automating", "Talk to us") |
| **Button Icon** | Icon | Icon displayed in button (e.g., "Arrow Right") |
| **Features 1-5** | String | Feature names (e.g., "Automate up to 3 workflows") |
| **Feature 1-5 Included** | Dropdown | Enabled / Disabled (show checkmark or X) |
| **Elevated Background** | Toggle | Add subtle background highlight |
| **Link** | URL | Button link destination (e.g., "/contact") |

### Add or Modify Features

Each plan includes 5 feature slots:

1. Click the plan card to select it
2. Update **Feature 1** through **Feature 5** text fields
3. Toggle **Feature 1-5 Included** to show checkmark (Enabled) or X (Disabled)
4. Changes appear immediately on both Monthly and Yearly views

### Change the Toggle Labels

![Change the Toggle Labels](/images/guide/synthexa-92@2x.png)

To customize "Monthly" / "Yearly" toggle buttons:

1. Click **Edit Component** on PricingPlans
2. Make sure you're in **Yearly | Primary** variant
3. Find and select **PricingToggle** component (in the layers or on canvas)
4. In **Properties**, update the toggle labels
5. The toggle width auto-adjusts to fit new text
6. Changes apply to all variants automatically

![Change the Toggle Labels](/images/guide/synthexa-93@2x.png)

## Usage

CardPricing and PricingPlans are used in two locations:

### Homepage Pricing Section
The main pricing section with 3 plans, monthly/yearly toggle, and feature highlights.

### Pricing Page (`/pricing`)
Full pricing page that includes:
1. **PricingPlans section** — Same 3 plans with toggle and features
2. **Detailed Features Table** — Complete feature comparison for all plans
   - Configured via [Pricing CMS Collection](/synthexa/guide/cms-pricing)
   - Shows detailed feature availability per plan
   - Includes support tiers, SLA, documentation, and more

## CMS Integration

The detailed features table at the bottom of the Pricing page is managed through the Pricing CMS Collection:

1. Each feature in the table is a CMS item
2. Feature availability (checkmark/X) is controlled per plan
3. Support tiers and service level details are configured in CMS
4. Changes in CMS automatically update the pricing page table

To add or modify features in the comparison table, edit the [Pricing Collection](/synthexa/guide/cms-pricing).

## Next Steps

→ [CardPattern](/synthexa/components/card-pattern)

→ [CardServices](/synthexa/components/card-services)

→ [Other Components](/synthexa/components/other)
