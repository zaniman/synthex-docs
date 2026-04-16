# Legal Collection

The Legal collection manages all legal documents: Privacy Policy, Terms of Service, etc.

## Fields

| Field | Type | Notes |
|-------|------|-------|
| **Title** | String | Document name (e.g. "Privacy Policy", "Terms of Service") |
| **Version** | String | e.g. "v1.03" or "v2.0" |
| **Last Updated** | Date | Shown at the top of the legal page |
| **Content** | Rich Text | Full legal document body |

## Standard Documents

Create at least these two:

### 1. Privacy Policy

**Title:** "Privacy Policy"

**Version:** "v1.0"

**Last Updated:** Today's date

**Content:** Your privacy policy text

:::warning
Replace `legal@synthex.com` with your actual email address before publishing.
:::

### 2. Terms of Service

**Title:** "Terms of Service"

**Version:** "v1.0"

**Last Updated:** Today's date

**Content:** Your terms of service

## Additional Documents

You can add more as needed:

- **Cookie Policy**
- **Data Processing Agreement**
- **Acceptable Use Policy**
- **Disclaimer**

## Auto-Generated Pages

Each legal document gets its own page at `/legal/:slug`:

- `/legal/privacy-policy`
- `/legal/terms-of-service`
- etc.

Pages display:
- Document title
- Version number
- Last updated date
- Full content
- Navigation to other legal pages

## Best Practices

- **Use clear headings** — Structure documents with `### Section Name`
- **Numbered lists** — For terms and conditions
- **Bold important terms** — Highlight key requirements
- **Links to other legal pages** — Cross-reference related docs
- **Update regularly** — Maintain version numbers and dates
- **Legal review** — Have a lawyer review before publishing

## Footer Links

Legal documents are automatically linked in the footer. No additional setup required.

## Next Steps

→ [Pricing Collection](/synthex/guide/cms-pricing)
