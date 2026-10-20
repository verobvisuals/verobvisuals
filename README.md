# Verobvisuals website

Portfolio site for Verobvisuals photography. It's free to host on Cloudflare Pages and free to edit with Pages CMS.

## How to edit your site (no code)

1. Go to **app.pagescms.org** and sign in with GitHub.
2. Open the **verobvisuals** project.
3. Pick a section from the left menu, make your change, and click **Save**. The live site updates in about 1–2 minutes.

| I want to… | Where |
|---|---|
| Add photos to a gallery | **Portfolio galleries** → open the gallery → **Photos** → *Add an entry* → upload |
| Reorder photos | Same place, drag photos by the handle |
| Remove a photo | Same place, the trash icon on that photo |
| Create a new gallery | **Portfolio galleries** → **Add an entry** (choose a category, cover photo, then photos) |
| Hide a gallery without deleting it | Open it → turn on **Hide this gallery** |
| Pick which galleries show on the homepage | Open a gallery → **Show on homepage** (the first 3 are shown) |
| Change gallery order | Set **Position**: 1 shows first, then 2, and so on |
| Change prices or packages | **Sessions & pricing** |
| Add a testimonial | **Testimonials** → **Add an entry** (the section appears on the homepage once one exists) |
| Edit the About page | **About page** |
| Change the homepage photo or text | **Homepage** |
| Edit FAQ | **FAQ** |
| Change Instagram username, site title, Google description, logo, or announcement bar | **Site settings** |

**Tips**
- In any heading, put `*asterisks*` around a word to make it *italic*, like `Selected *work*`.
- Export photos at about 2500 px on the long side (under 10 MB each). The site automatically makes fast web versions.
- Always fill in **Alt text**, a short description of each photo. It helps Google and visitors using screen readers.
- Made a mistake? Every save is kept. On GitHub, open the repository → **Commits** to see and undo past changes, or ask for help.

## How inquiries work

Every **Inquire** button leads to the Contact page. Clients fill in their name, session type, date and details, then tap **Copy message & open Instagram**. The message is copied, and a DM to your account opens for them to paste and send. Make sure your Instagram username is set in **Site settings** and that your account accepts message requests.

## Technical notes

- Built with Astro (static site). Content lives in `src/content/`, and uploaded photos in `src/assets/uploads/`.
- Dashboard configuration: `.pages.yml`.
- Cloudflare Pages build settings: framework preset **Astro**, build command `npm run build`, output folder `dist`.
- If the web address changes (for example, a custom domain later), update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
- Gallery categories are defined in two places: `src/content.config.ts` (`CATEGORIES`) and `.pages.yml` (the category options). Keep them identical.
