# Sportsbook Notebook v0.01.014

This release adds a configurable read-only feed gateway to the existing v0.01.013 app. Ticket OCR, storage, export/import, tabs and ESPN Gamecast links are preserved.

## Install
1. Export a notebook backup in the existing app.
2. Replace `index.html` in your GitHub Pages repository.
3. Optionally deploy `worker.js` as a Cloudflare Worker (Workers & Pages > Create application > Worker > edit code > Deploy). Copy its full `https://...workers.dev` address.
4. In the app's Live Football panel, paste that base URL into **Optional feed gateway URL** and press **Save gateway**. Refresh ESPN scores. To revert, press **Use direct feeds**.
5. Visit `<your-worker-url>/health` to verify the Worker. It reports whether Kalshi is enabled.

## Kalshi permissions
The Worker deliberately returns HTTP 403 for Kalshi by default. Kalshi's developer agreement includes API access and use requirements. Do not enable the gateway's Kalshi forwarding until you have established authorization for your intended use. If authorized, configure the Worker environment variable `ALLOW_KALSHI` to the string `true` and redeploy. This app does not log in, place orders or trade.

## Architecture
GitHub Pages (static PWA) -> HTTPS Cloudflare Worker -> allowlisted public upstream endpoint. The gateway only supports fixed ESPN league/date and Kalshi series queries, with 20-second upstream caching and CORS limited to the existing GitHub Pages origin. No ticket data is sent to the Worker.

## Caveats
This version provides gateway integration, not a deployed service; the Cloudflare account owner must deploy it. No external connectivity test was performed. Feed success depends on upstream availability and permitted access. Keep manual JSON import as an emergency diagnostic fallback.
