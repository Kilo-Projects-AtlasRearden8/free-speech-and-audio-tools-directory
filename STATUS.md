# STATUS

## What was built

A static, local-first freebies directory of free speech and audio tools, published by Asdale Dynamics, LLC.

Files:
- `index.html` — single-file static site with embedded tool data, CSS, and vanilla JavaScript. Client-side filtering by category (speech-to-text, text-to-speech, recording, editing) plus client-side text search across name, category, cost, platform, and steps. No build step, no server required, no network needed after load.
- `data` — 18 tool listings embedded in `index.html` (`<script id="tools-data" type="application/json">`), 5 speech-to-text, 5 text-to-speech, 4 recording, 4 editing. Each listing: name, category, cost, platform, steps, official link. No affiliate links.
- `README.md` — purpose, how to run, credits Asdale Dynamics, LLC, license note.
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`.
- `.gitignore` — OS/editor noise only.
- `STATUS.md` — this file.

No `.github/workflows` files, no secrets, API keys, or personal data.

## How to run

Open `index.html` in any web browser, or serve locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Verification results

- Embedded JSON parses successfully: 18 tools, all required fields present (name, category, cost, platform, steps, link).
- All 18 links are valid http(s) URLs.
- No affiliate tokens in links.
- JavaScript syntax checked with Node.js (`new Function()` parse): OK.
- Served locally with `python3 -m http.server 8000`: `index.html` returns HTTP 200, page content and "Asdale Dynamics, LLC" credit confirmed in markup.
- LICENSE copyright line verified: `Copyright (c) 2026 Asdale Dynamics, LLC`.

## Known gaps

- No automated test suite (site is static HTML/JS; verified manually via Node parse and local HTTP serve).
- No browser-based visual QA (no browser available in this environment).
- oTranscribe links to its homepage (otranscribe.com) rather than a deep link, since the app runs client-side there.
- macOS/Windows built-in tools link to vendor support homepages (support.apple.com, support.microsoft.com) rather than version-specific article paths, to avoid stale or guessed deep links.
