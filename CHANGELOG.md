# Changelog

## v0.01.013 — Tabbed live football interface and Kalshi matchup normalization

- Reorganized Live Football Lab into four tabs: Games, My Tickets, Kalshi, Diagnostics. This reduces scroll length and keeps source controls accessible.
- Added canonical NFL team-code aliases for Kalshi ticker-to-ESPN game matching, requiring the selected date and both participants.
- Updated successful Kalshi import diagnostics to report market count and exact game matches.
- Removed the `status=open` filter from the Kalshi request, so live markets in other states are not excluded solely by that parameter.
- Preserved ESPN Gamecast new-tab links and all notebook features from v0.01.012.

**Testing note:** JavaScript syntax checked. Actual Kalshi connectivity and event matching must be tested on Safari/GitHub Pages. This release does not include a proxy server or bypass CORS.

## v0.01.012

- ESPN Gamecast links in individual game cards, independent feed refresh controls, collapsible ticket details, connection diagnostics.
