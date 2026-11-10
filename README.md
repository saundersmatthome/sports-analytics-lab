# Sportsbook Notebook v0.01.016 — Simulator input fix

## Changes
- American odds inputs use editable text fields, supporting direct replacement and plus/minus signs on iPad Safari.
- Moneyline selections display one odds input; the redundant disabled moneyline field is removed.
- Spread selections display two explicit fields: point spread and American odds.
- Missing or invalid values are identified under each selection.
- Blank odds and odds with absolute value under 100 are rejected, rather than interpreted as valid odds.
- The payout is calculated only when all required values are present and valid.
- Existing ticket storage, proposed bets, and ticket format are unchanged.

## Install
1. Export a notebook backup from the current app.
2. Upload `index.html` from the ZIP to the GitHub Pages repository root, replacing the previous `index.html`.
3. Refresh Safari (if necessary, close the tab and reopen the site).
4. Confirm the header shows v0.01.016.

## Test
Choose Parlay, add three different games as spread selections, type `-4.5` in each point-spread field and `-110` in each American-odds field, and set the wager to $2. Gross payout should be approximately $7.23, net profit approximately $5.23. These are example inputs, not actual sportsbook quotes.

This patch has passed JavaScript syntax validation but has not been tested interactively in iPad Safari. Live odds availability is unchanged.
