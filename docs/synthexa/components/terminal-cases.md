# TerminalCases

A company-specific case study component that displays automation success stories with terminal-themed dashboards. Used on both the homepage (rotating variants) and individual case detail pages (via CMS).

![TerminalCases](/images/guide/synthexa-82@2x.png)
![TerminalCases](/images/guide/synthexa-83@2x.png)

## Overview

TerminalCases showcases client success with customizable company variants, each featuring:
- Company logo and branding
- Company profile and industry
- Automation metrics (hours saved, cost reduction, success rate, payback period)
- Connected tools count and deployment time
- Terminal-themed visual design with live metrics display

**Component Variants:**
- **Home variants** (suffix: Home) — Auto-rotating on the homepage

![Home variants](/images/guide/synthexa-84@2x.png)

- **Case variants** (suffix: Case) — Individual case study pages linked to CMS

![Case variants](/images/guide/synthexa-85@2x.png)

## How to Use

### On the Homepage

Homepage TerminalCases automatically rotate between Home variants:

1. Select TerminalCases on the canvas
2. Click **Edit Component** to see all Home variants
3. The homepage displays 3 rotating variants (typically in a carousel)
4. Each variant shows automatically as users view the page

### On Case Study Pages

Case Study pages use CMS integration to display specific company variants:

1. Open a case in the CMS
2. In the **Terminal Snapshot** field, select the company variant dropdown
3. Choose the corresponding Case variant (e.g., "LuckycharmCase")
4. The terminal snapshot displays on the published case page

## Editing Variants

Each TerminalCases variant contains an embedded TerminalDashboard. To customize it:

1. Inside the variant, click on the TerminalDashboard
2. Edit its properties for:
   - **Metrics panels** — Add, remove, or reorder metric displays
   - **Colors** — Terminal Primary/Secondary colors
   - **Layout** — Panel arrangement and spacing

Refer to [TerminalDashboard documentation](/synthexa/components/terminal) for complete customization options.

## CMS Integration

### Cases Collection Field

In the **[Cases CMS](/synthexa/guide/cms-cases#terminal-snapshot-setup)**, the **Terminal Snapshot** field automatically provides:

1. Dropdown selector showing all available Case variants
2. Visual preview of the selected variant
3. Auto-linking to case data (company profile, metrics, etc.)

### Setting Up a New Case

1. Create a new case in the Cases CMS
2. Fill in case details (company name, description, metrics, etc.)
3. In **Terminal Snapshot**, click **Insert**
4. Select **Terminal** → **TerminalCases**
5. Choose your company variant from the dropdown
6. The terminal snapshot auto-populates with company data

### Add a New Company Case

1. Duplicate an existing variant (click + Variant)
2. Rename it with the new company name
3. Click on the TerminalDashboard or select in the layers
4. Create matching Home variant if needed for homepage rotation

![Add a New Company](/images/guide/synthexa-86@2x.png)

## Next Steps

→ [TerminalDashboard](/synthexa/components/terminal)

→ [Other Components](/synthexa/components/other)
