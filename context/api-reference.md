# API Reference

All endpoints defined in `server/routes.ts`.

## Endpoints

### POST /api/contact
Contact form submission.
- **Body:** `{ name, email, company?, phone?, message? }`
- **Validation:** Zod schema
- **Response:** `{ success: boolean, message: string }`
- **Note:** Currently logs only - no email/CRM integration yet

### GET /api/youtube-videos
Fetches 3 most recent videos from Cyberaktive YouTube channel.
- **Source:** YouTube RSS feed (channel ID: UCFvIstbE78m2NJjC9QS56kg)
- **Response:** `[{ videoId: string, title: string }]`
- **Cache:** 1 hour (`Cache-Control: public, max-age=3600`)

### GET /robots.txt
Serves `public/robots.txt`.

### GET /sitemap.xml
Serves `public/sitemap.xml`.
