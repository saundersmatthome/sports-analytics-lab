# v0.01.014 test checklist

1. Back up saved tickets; update index.html; confirm v0.01.014.
2. Confirm existing five tickets, positions and OCR controls remain intact.
3. Without gateway: verify ESPN direct refresh and independent Kalshi error/status handling.
4. Deploy worker.js; open its /health endpoint and verify ok:true.
5. Save the Worker URL in the app; refresh ESPN and confirm games load.
6. Refresh Kalshi: expect 403 until authorized access is configured; confirm ESPN continues working.
7. Confirm Games / My Tickets / Kalshi / Diagnostics tabs and Gamecast links.
8. Switch to direct feeds, verify it works and return to gateway mode.
9. Confirm export/import backup still works between browsers.
