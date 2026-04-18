# Career Collection (Open Roles)

The Open Roles collection powers your `/careers` page with job listings.

## Fields

| Field | Type | Notes |
|-------|------|-------|
| **Title** | String | Job title (e.g. "Senior React Developer") |
| **Short Description** | String | One-liner on the careers listing |
| **Location** | String | e.g. "Remote", "San Francisco", "NYC" |
| **Employment Type** | Enum | Full-time / Contract |
| **Department** | Enum | Engineering / Design / Ops |
| **Details** | Rich Text | Full job description using structured headings |

## Writing Job Descriptions

Use these headings in the **Details** field to organize your job posts:

```markdown
### Responsibilities
- Task and responsibility 1
- Task and responsibility 2
- Task and responsibility 3
- Task and responsibility 4
- Task and responsibility 5

### Requirements
- Required skill or experience 1
- Required skill or experience 2
- Required skill or experience 3
- Required skill or experience 4
- Nice to have: Bonus skill or experience

### Offer
- Salary or "Competitive salary based on experience"
- Remote/location flexibility
- Benefit 1
- Benefit 2
- Benefit 3
- Company culture or perk
```

## Example Job Posting

**Title:** "Senior Automation Engineer"

**Short Description:** "Design and implement production automation workflows. 2+ years building at scale with Make, n8n, Zapier."

**Location:** "Remote"

**Employment Type:** "Full-time"

**Department:** "Engineering"

**Details:**

```markdown
### Responsibilities
- Design and implement automation workflows using tools like Make, n8n, and Zapier
- Integrate third-party APIs and business systems (CRM, billing, HR tools)
- Write exception handling logic and maintain monitoring for production automations
- Collaborate with the solutions team to translate client requirements into technical specs
- Document automation logic independently of the tooling layer

### Requirements
- 2+ years of experience building production automations
- Strong understanding of REST APIs and webhook-based integrations
- Experience with at least one major automation platform (Make, n8n, Zapier, or similar)
- Ability to write and maintain JavaScript or Python for custom logic
- Strong debugging skills — comfortable tracing failures across multiple systems
- Experience working with CRM platforms (HubSpot, Salesforce) is a plus

### Offer
- Competitive salary based on experience
- Fully remote with flexible hours
- Direct impact on client outcomes from day one
- Access to a wide range of tooling and no bureaucratic overhead
- Quarterly team retreats
- Equipment budget for your home setup
```

## Auto-Generated Pages

Once saved, a new job page is created at `/careers/:slug` with:
- Full job description
- Location and employment type
- Application form

## Next Steps

→ [Legal Collection](/synthexa/guide/cms-legal)
