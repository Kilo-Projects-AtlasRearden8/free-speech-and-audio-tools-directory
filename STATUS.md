# STATUS

## What was built

A static, local-first freebies directory of free speech and audio tools, published by Asdale Dynamics, LLC.

Files:
- `index.html` — single-file static site with embedded tool data, CSS, and vanilla JavaScript. Client-side filtering by category (speech-to-text, text-to-speech, recording, editing) plus client-side text search across name, category, cost, platform, and steps. No build step, no server required, no network needed after load.
- `TOOLS.md` — full Markdown directory mirroring all 18 listings (cost, platform, steps, official link). Satisfies the "Markdown + static HTML site" requirement.
- `README.md` — purpose, how to run, style promises, credits Asdale Dynamics, LLC, license note, About section.
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`.
- `verify.js` — automated verification script (runs with `node verify.js`).
- `.gitignore` — OS/editor noise only.
- `STATUS.md` — this file.

Data: 18 tool listings embedded in `index.html` (`<script id="tools-data" type="application/json">`), 5 speech-to-text, 5 text-to-speech, 4 recording, 4 editing. Each listing: name, category, cost, platform, steps, official link. No affiliate links.

No `.github/workflows` files, no secrets, API keys, or personal data.

## How to run

Open `index.html` in any web browser, or serve locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Run automated verification:

```bash
node verify.js
```

## Verification results

- `node verify.js`: all checks passed (exit code 0).
  - LICENSE contains exact copyright line `Copyright (c) 2026 Asdale Dynamics, LLC`.
  - README credits Asdale Dynamics, LLC.
  - Embedded JSON parses successfully: 18 tools, all required fields present (id, name, category, cost, platform, steps, link).
  - Category counts: speech-to-text 5, text-to-speech 5, recording 4, editing 4.
  - All 18 links are valid http(s) URLs.
  - No affiliate tokens in links.
  - No secret/personal-data patterns in index.html, README.md, LICENSE, STATUS.md, TOOLS.md.
- Served locally with `python3 -m http.server 8000`: `index.html` returns HTTP 200, page content and "Asdale Dynamics, LLC" credit confirmed in markup.

## Known gaps

- No browser-based visual QA (no browser available in this environment).
- oTranscribe links to its homepage (otranscribe.com) rather than a deep link, since the app runs client-side there.
- macOS/Windows built-in tools link to vendor support homepages (support.apple.com, support.microsoft.com) rather than version-specific article paths, to avoid stale or guessed deep links.
