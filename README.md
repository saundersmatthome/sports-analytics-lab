# Sportsbook Notebook v0.01.019

## Changes
- Removes visible Kalshi references and uses Polymarket naming and public Gamma events.
- Adds ESPN prediction / Polymarket winner-price comparison with percentage-point differences when an exact game match is verified.
- Polymarket event discovery attempts NFL sports series and NFL tag, deduplicates events, and requires team/date match.
- Refreshed responsive visual styling and navigation spacing for iPad/iPhone.
- Keeps existing ticket localStorage key `sportsbook-notebook-v1` and saved ticket format.

## Important limitations
- Polymarket's international Gamma API and polymarket.us are not the same feed; prices may differ.
- Polymarket matches may still be absent. CORS and API schema are not guaranteed. Never infer a quote when unmatched.
- ESPN prediction is win probability, not spread-cover probability. Polymarket quotes are market prices, not fair probabilities.
- This version retains NFL/college football only; NHL, NBA and English football are roadmap items, not implemented.
- The old optional gateway configuration remains for ESPN compatibility.

## Install
1. Export your existing backup.
2. Rename `sportsbook-notebook-v0.01.019-index.html` to `index.html` and upload to your GitHub Pages repository.
3. Reload Safari and confirm v0.01.019.
4. Test ESPN odds, predictor, Polymarket status, proposals and round robin payouts.

## Validation
JavaScript syntax checked with Node; HTML DOM interactions require Safari testing.
