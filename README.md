# Personal Portfolio Website

Animated personal portfolio site (static HTML/CSS/JS) ready for GitHub Pages.

## Files

- `index.html` - structure and sections
- `styles.css` - visual design, layout, animations, responsiveness
- `script.js` - editable profile data and dynamic rendering
- `resume.pdf` - linked in the site buttons

## Edit your details quickly

Open `script.js` and update:

- `profile.name`, `profile.role`, `profile.summary`, `profile.about`
- `profile.skills`, `profile.projects`, `profile.timeline`, `profile.achievements`
- `profile.socials` and `profile.resumeUrl`

## Run locally

Because this is static, you can open `index.html` directly in browser.

Optional local server:

```bash
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## Deploy to GitHub Pages

1. Create a new GitHub repo.
2. Push these files to the repo root.
3. In GitHub: `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`), folder `/ (root)`
5. Save and wait 1-2 minutes.
6. Your site will be live at your GitHub Pages URL.

## Notes

- Replace placeholder project links (`your-username`, demo links) in `script.js`.
- You can add your own profile image by replacing the avatar block in `index.html`.
