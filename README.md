# Sportsbook Notebook v0.01.015

## Install
1. Export a backup from the running notebook.
2. Replace the repository root `index.html` with the supplied `sportsbook-notebook-v0.01.015-index.html` (rename it `index.html` in GitHub).
3. Commit and wait for GitHub Pages deployment; hard-refresh the browser.
4. Existing local tickets use the same storage key. Keep a backup before updating.

## Added
- Bet Simulator: select ESPN games and sides, manually verify/enter American odds and spreads, calculate straight, parlay, or round-robin gross returns.
- $2 minimum per straight/parlay, $1 per round-robin combination.
- Save a proposal, show a separate proposed-bets list, kiosk view in new tab, and convert a proposal into a purchased ticket.
- Read-only ESPN final-score evaluation for straight and parlay legs, with push handling. No automatic changes to actual settlement or redemption.

## Important limitations
- Polymarket integration is NOT included in this build. ESPN is the game source; ESPN odds can be missing, so manual prices are required.
- Round-robin leg outcomes are displayed, but complete automatic per-combination payout settlement is not implemented.
- Evaluation uses only the currently loaded ESPN date/league and does not persist results.
- Opposing picks from the same game are rejected in the simulator.
- For real wagers, verify sportsbook minimums, prices and ticket details at purchase.
