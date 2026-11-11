# Sportsbook Notebook v0.01.017

## Changes
- Round robin defaults to 2-team combinations; choose 3-team or all 2+ combinations explicitly. A 3-team selection from exactly 3 picks is **one** combination, not three.
- Wager defaults to $1 per round-robin combination and $2 for straight/parlay.
- Moneyline selections use the corresponding team's ESPN American moneyline odds when available.
- Spread selections prefill the selected team's signed spread from ESPN's `details` string where team abbreviation matches, and prefill spread **price** only if ESPN provides it separately.
- Added Over and Under selections, prefilled with ESPN total when supplied, with separately entered total price if not supplied.
- One market per game per ticket; same-game correlated selections require special sportsbook pricing and are not modeled.
- Preserves `sportsbook-notebook-v1` storage key and existing tickets.

## Limitations
- ESPN odds fields vary; prices that are not actually supplied stay blank. Never interpret the spread or total number as the American price. Check current kiosk prices.
- Round-robin gross payout assumes every combination wins; actual partial wins and pushes require further settlement work.
- No live Safari end-to-end test performed; JavaScript syntax checked.

## Deployment
1. Export a backup from your existing app.
2. Upload the included `index.html` to your GitHub Pages repository root, replacing the existing one.
3. Refresh Safari and confirm v0.01.017.
4. Choose Round Robin, 2-team, three different games, and $1 per combination. You should see 3 individual bets, $3 cost. At -110 on all three, all-win gross return is about $10.99.
