# Sportsbook Notebook — v0.01.013

Personal browser-based sportsbook ticket notebook with OCR, ticket tracking, live ESPN football scores, experimental spread analytics and read-only Kalshi market-data exploration.

## Deploy

1. Export a backup from the running notebook before updating.
2. Replace the repository-root `index.html` with the file from this release. Optionally update `README.md`, `CHANGELOG.md`, and `TESTING.md`.
3. Commit changes and wait for GitHub Pages to publish. Reload Safari; confirm **v0.01.013** appears at the top.

Ticket records remain in the browser's local storage under the existing key. The app does not synchronize data across browsers. Export/import is the supported transfer mechanism.

## What's new

- Four tabs in Football Live Lab: **Games**, **My Tickets**, **Kalshi**, and **Diagnostics**. Feed controls remain visible above the tabs.
- Canonical NFL team-code alias matching for Kalshi event tickers, including common alternate codes, with exact date and both-team checks.
- Kalshi status text now includes the count of exact game matches after a successful market-data import.
- Kalshi fetch no longer restricts listings to `status=open`; this helps with in-progress listings that have different states, but does not solve cross-origin browser restrictions.
- Retains the v12 ESPN Gamecast button, ticket notebook, backup/import and OCR.

## Known limitations

- The Kalshi endpoint may be blocked by browser cross-origin (CORS) policy. The Diagnostics tab retains manual JSON file/paste import as a fallback. Opening an API URL directly does not prove browser `fetch()` can read it.
- Market matching is restricted to recognizable NFL matchup tickers, including the ticker's date and both team abbreviations. College football and some market formats may remain unmatched. Ambiguous abbreviations are not guessed.
- The app does not derive spread-cover probabilities from Kalshi winner quotes. Its live spread-cover estimates are experimental and uncalibrated. No trades or automatic ticket settlement.
- Game details and tabs are refreshed from third-party services; external feed availability varies.
