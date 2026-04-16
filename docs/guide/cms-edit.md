# How to Edit CMS Content

Step-by-step guide to creating and editing CMS entries.

## Creating a New Entry

### Step 1: Open the CMS Panel

In the Framer editor, go to the **left sidebar** and click the **CMS icon** (or find the CMS panel tab).

### Step 2: Select Your Collection

Choose the collection you want to add to:
- Blog
- Blog Authors
- Blog Categories
- Cases
- Open Roles
- Pricing
- Legal

### Step 3: Click "New Item"

Look for a **+ New Item** button or similar. Click it to create a new entry.

### Step 4: Fill in the Fields

Depending on the collection, fill in the required fields:

- **Text fields** — Type your content directly
- **Image fields** — Click to upload an image
- **Rich text** — Use formatting, headings, links
- **References** — Select from another collection (e.g., select an Author for a Blog post)
- **Enums** — Choose from dropdown options
- **Booleans** — Toggle on/off

### Step 5: Save

Click the **Save** button. Your entry is now in the CMS.

### Step 6: Publish Your Site

Go to the top-right of Framer and click **Publish**. Your new CMS entry is now live.

## Editing an Existing Entry

### Step 1: Open the CMS Panel

**Left sidebar** → **CMS icon**

### Step 2: Find the Collection

Select the collection containing the item you want to edit.

### Step 3: Click the Item

All items in the collection are listed. Click the item you want to edit.

### Step 4: Make Changes

Edit any field. Your changes are saved automatically.

### Step 5: Publish

Click **Publish** (top-right) to make the changes live.

## Deleting an Entry

1. **Open CMS panel** → select collection
2. **Right-click** the item → **Delete**
3. Confirm the deletion
4. **Publish** to apply the change

:::warning
Deleting a CMS entry removes its auto-generated page (e.g., deleting a blog post removes `/blog/:slug`).
:::

## Reordering Entries

Most collections let you drag items to reorder:

1. **Open CMS panel** → collection
2. **Click and drag** the item to a new position
3. **Publish** to save the order

## Rich Text Tips

When editing Rich Text fields (like Blog Content or Case Study Details):

- `# Heading 1` — Creates an H1 heading
- `## Heading 2` — Creates an H2 heading
- `**Bold**` — Makes text bold
- `*Italic*` — Makes text italic
- `[Link text](https://example.com)` — Creates a link
- `-` for bullet points
- `1.` for numbered lists

## Slug Auto-Generation

When you create an entry with a **Title** field, the **Slug** (URL path) is auto-generated:

- "My Amazing Blog Post" → `my-amazing-blog-post`
- "Case Study 2024" → `case-study-2024`

You can manually edit the slug if needed.

## Publishing Changes

:::tip
CMS changes don't go live until you **Publish** your site. Click **Publish** (top-right in Framer) after making changes.
:::

## Bulk Operations

For large imports of content (many blog posts at once), consider:

1. Using Framer's **CMS CSV import** (if available)
2. Contacting Framer support for bulk operations

## Troubleshooting

**Changes not showing up?**
- Make sure you clicked **Save** and then **Publish**
- Refresh your browser to see live changes

**Can't edit a field?**
- Check if the field is required but empty
- Some fields may be locked if they're referenced elsewhere

**Image not uploading?**
- Make sure the file is under 25MB
- Try a different image format (JPG, PNG, WebP)

## Next Steps

Now that you can edit CMS content, let's customize your design:

→ [Design System - Colors](/synthex/design/colors)
