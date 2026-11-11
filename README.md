# Sportsbook Notebook v0.01.018

## What's new
- Attempts ESPN game-detail (`summary?event=...`) enrichment for each upcoming loaded matchup. Reads detailed pickcenter odds when available, including team-specific moneyline, spread, spread price, total and over/under prices.
- Adds ESPN matchup win prediction where present in the returned summary.
- Attempts public Polymarket Gamma sports discovery and open-event retrieval; matches only when both teams and the event date agree, and displays winner prices as distinct from ESPN predictions and sportsbook odds.
- Missing, unsupported or blocked feeds are explicitly marked unavailable; no fabricated prices.
- Existing round-robin combination logic and ticket storage key are unchanged from v0.01.017.

## Install
1. Export your notebook backup in the current app.
2. Rename `sportsbook-notebook-v0.01.018-index.html` to `index.html` and upload to your GitHub Pages repository root, replacing the prior file.
3. Reload Safari and confirm `v0.01.018` at the top.
4. In Bet Simulator, press `Load ESPN games`, expand a matchup, and inspect auto-filled lines and ESPN/Polymarket comparison.

## Limitations and testing
- ESPN public endpoints and Polymarket Gamma may block cross-origin requests in iPad Safari; direct opening of API URLs is not proof that browser `fetch` works.
- ESPN summary may omit betting market prices and predictor fields. Blank means no verified price; enter kiosk prices manually.
- Polymarket match is conservative and will remain unavailable if sports series discovery, date matching, market shape or CORS fails. No trading or accounts involved.
- Displayed odds are snapshots, not guaranteed kiosk prices. Predictions and Polymarket winner prices do not predict spread cover.
- This build passed JavaScript syntax validation and ZIP integrity testing, but live iPad Safari integration remains unverified.
