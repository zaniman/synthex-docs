# Career Collection (Open Roles)

The Open Roles collection powers your `/career` page with job listings.

## Fields

| Field | Type | Notes |
|-------|------|-------|
| **Title** | String | Job title (e.g. "Senior React Developer") |
| **Short Description** | String | One-liner on the careers listing |
| **Location** | String | e.g. "Remote", "San Francisco", "NYC" |
| **Employment Type** | Enum | Full-time / Contract / Part-time |
| **Department** | Enum | Engineering / Design / Operations / Sales |
| **Details** | Rich Text | Full job description using structured headings |

## Writing Job Descriptions

Use these headings in the **Details** field to organize your job posts:

```markdown
### About the Role
Brief overview of the position.

### Responsibilities
- Responsibility 1
- Responsibility 2
- Responsibility 3

### Requirements
- Required skill 1
- Required skill 2
- Nice to have...

### What We Offer
- Salary range or "Competitive"
- Benefits
- Perks
- Company culture
```

## Example Job Posting

**Title:** "Senior Automation Engineer"

**Short Description:** "Build AI workflows that scale. Lead our automation platform."

**Location:** "Remote"

**Employment Type:** "Full-time"

**Department:** "Engineering"

**Details:**

```
### About the Role
We're looking for a Senior Automation Engineer to join our growing team...

### Responsibilities
- Design and implement AI automation workflows
- Collaborate with clients on process optimization
- Mentor junior engineers

### Requirements
- 5+ years of software engineering experience
- Experience with Python and workflow automation
- Understanding of LLM applications

### What We Offer
- Salary: $150k–$200k
- Full health insurance
- 4 weeks PTO
- Remote-first culture
```

## Auto-Generated Pages

Once saved, a new job page is created at `/career/:slug` with:
- Full job description
- Location and employment type
- Application CTA
- Navigation to other open roles

## Next Steps

→ [Legal Collection](/synthex/guide/cms-legal)
