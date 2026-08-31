# JavaScript Practice Projects — Starter Files

10 starter projects, ordered to build on each other over ~4 months.
Each folder is a standalone site — just open its `index.html` in a
browser (or use a local server / the VS Code "Live Server" extension,
which some of these projects need anyway since `fetch` can behave
oddly on `file://` URLs in some browsers).

## How these are set up

Every project has:
- `index.html` — structure, with `<!-- TODO -->` notes where relevant
- `css/styles.css` — a basic working stylesheet, ready to go
- `js/*.js` — the real work. Functions and variables are declared,
  DOM elements are already selected, and `// TODO` comments walk
  you through each step in order (same style as your course's
  "STEP 1a / STEP 1b" comments).

None of the JS is complete — that's the point. Read the comments
top to bottom in each file; they're written as a guided sequence,
not just a checklist.

## Order

1. `01-number-guessing-quiz` — variables, conditionals, loops
2. `02-todo-list` — DOM manipulation, events, event delegation
3. `03-product-catalog` — arrays, filter/sort/map, rendering
4. `04-image-gallery` — events at scale, keyboard events, state
5. `05-form-validator` — conditionals, regex, live feedback
6. `06-oop-fleet-simulator` — constructor functions, prototypal inheritance
7. `07-weather-app` — fetch, async/await, JSON, real API
8. `08-ask-claude-chat` — authenticated fetch (POST + headers), loading/error states
9. `09-location-journal` — Geolocation API, arrays of objects, dates
10. `10-capstone-dashboard` — combines 2, 7, 8, and browser device APIs
    into one page, with each widget isolated in its own IIFE

## Notes

- Project 7 uses Open-Meteo (free, no API key needed).
- Project 8 uses the Claude API endpoint from your course material —
  you'll need to fill in your student API key in `js/script.js`.
- Project 9's optional reverse-geocoding step also uses Open-Meteo.
- Project 10's device widget gracefully degrades where the Battery
  or Device Orientation APIs aren't supported (this is common —
  don't be surprised if your desktop browser can't show orientation).

If you get stuck on any single TODO for more than ~20 minutes,
that's usually a sign to look up the specific method (MDN is the
best reference for all of this) rather than push through blind.
