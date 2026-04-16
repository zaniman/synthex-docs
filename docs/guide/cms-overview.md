# CMS Collections Overview

SYNTHEX uses **Framer CMS** to power all dynamic content. Adding an item to a CMS collection automatically creates its corresponding page.

## 7 Collections

| Collection | Used On | Auto-generates |
|-----------|---------|-----------------|
| **Blog** | /blog, homepage featured section | `/blog/:slug` pages |
| **Blog Authors** | Author cards on blog posts | Referenced in Blog items |
| **Blog Categories** | Blog filtering and taxonomy | Referenced in Blog items |
| **Cases** | /cases, homepage featured section | `/cases/:slug` pages |
| **Open Roles** | /career page | `/career/:slug` pages |
| **Pricing** | /pricing feature comparison table | Feature rows |
| **Legal** | Footer links | `/legal/:slug` pages |

## How It Works

1. **Create an entry** in a CMS collection (e.g., add a Blog post)
2. **Framer auto-generates a page** using the collection's template
3. **Changes sync instantly** — Edit the CMS entry, all connected pages update
4. **Publish once** — All new CMS pages go live with a single publish

:::tip
This is much faster than creating individual pages. Add 10 blog posts → 10 blog pages are created instantly.
:::

## Collection Dependencies

Some collections reference others. **Create in this order:**

1. **Blog Authors** → Create authors first
2. **Blog Categories** → Create categories first
3. **Blog** → Create posts (they reference Authors & Categories)

Similarly for Career:

1. **Open Roles** → Create job listings

For other collections (Cases, Legal, Pricing), there are no dependencies.

## Adding Your First CMS Entry

1. Open the **CMS panel** (left sidebar)
2. Select a collection (e.g., Blog)
3. Click **New Item** (or + button)
4. Fill in the fields
5. Click **Save**
6. Publish your site

The new item is now live (on next publish).

## Next Steps

Learn details about each collection:

- [Blog Collection](/synthex/guide/cms-blog)
- [Cases Collection](/synthex/guide/cms-cases)
- [Career Collection](/synthex/guide/cms-career)
- [Legal Collection](/synthex/guide/cms-legal)
- [Pricing Collection](/synthex/guide/cms-pricing)
- [How to Edit CMS Content](/synthex/guide/cms-edit)
