# Cases Collection

The Cases collection powers your `/cases` portfolio page and case study pages.

## Fields

| Field | Type | Notes |
|-------|------|-------|
| **Title** | String | Project name |
| **Client** | String | Client or company name |
| **Cover Image** | Image | Main project thumbnail |
| **Summary** | String | One-line description on cases grid |
| **Content** | Rich Text | Full case study body with results, process, learnings |
| **Results** | String | Key outcome metric (e.g. "40% faster", "$2M saved") |
| **Tags** | String | Service tags on the card (e.g. "AI, Automation, Data") |
| **Featured** | Boolean | Shows in homepage featured section |

## Example Case Study

**Title:** "ACME Corp Automation Platform"

**Client:** "ACME Corporation"

**Summary:** "Reduced manual data entry by 85% through AI-powered workflow automation."

**Content:** Detailed breakdown of the project, approach, and results.

**Results:** "85% reduction in manual work"

**Tags:** "AI, Automation, Integration"

**Featured:** Toggle on to showcase on homepage

## Auto-Generated Pages

Once saved, a new case study page is created at `/cases/:slug` with:
- Full case content
- Client name
- Results metric
- Project tags
- Navigation to related cases

## Tips

- **High-quality images** — Cover images should be 1200×630px or larger
- **Compelling results** — Lead with the key metric
- **Clear structure** — Use headings in content: Problem, Solution, Results
- **Screenshots** — Include project screenshots in the rich text content

## Next Steps

→ [Career Collection](/synthex/guide/cms-career)
