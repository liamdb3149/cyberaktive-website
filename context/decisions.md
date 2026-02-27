# Decisions

Settled decisions that should not be re-asked.

## Format
Each entry: date, decision, rationale.

---

### 2026-02-25: YouTube embed approach
**Decision:** Custom thumbnail-to-iframe component (no third-party library).
**Rationale:** Load static thumbnail from `img.youtube.com` initially. No iframe/JS until user clicks. Keeps bundle size small, avoids YouTube IFrame API complexity.

### 2026-02-25: YouTube video source
**Decision:** Fetch via YouTube RSS feed on the server, not YouTube Data API.
**Rationale:** No API key needed, no quota limits, RSS feed reliably returns recent videos. Server caches for 1 hour.

### 2026-02-25: Video count and layout
**Decision:** 3 thumbnails on desktop, 1 visible on mobile (carousel/scroll).
**Rationale:** Matches the existing card grid pattern on the landing page.
