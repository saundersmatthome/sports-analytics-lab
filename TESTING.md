# v0.01.013 test checklist

1. Export a ticket backup before replacing `index.html`.
2. After GitHub Pages refresh, confirm version v0.01.013.
3. Open Live Football & Odds and switch among Games, My Tickets, Kalshi and Diagnostics. Confirm only one tab's content is shown.
4. In Games, expand a matchup and open ESPN Gamecast. Return to the notebook and confirm scroll position is preserved.
5. Refresh ESPN independently. Confirm scores and ticket links appear.
6. Refresh Kalshi independently. In a successful response, check the market count and exact-match count. In a failure, verify the diagnostics clearly report the browser error.
7. Use Diagnostics to import a saved Kalshi JSON response. Compare a matching NFL event ticker with the correct ESPN game/date. Try a different date and confirm no incorrect match.
8. Verify saved tickets, OCR, Positions & Crossovers and backup import/export still work.
9. Test on iPad Safari and iPhone Safari; optionally test Edge/Chrome. Each browser keeps its own local ticket records.

If Kalshi still reports a browser network/CORS failure, a naming change cannot fix that transport error. Report the error text and whether manual JSON import matches games.
