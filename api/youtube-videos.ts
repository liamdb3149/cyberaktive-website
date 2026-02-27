import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const feedUrl =
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCFvIstbE78m2NJjC9QS56kg";
    const response = await fetch(feedUrl);
    const xml = await response.text();

    const entries = Array.from(
      xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)
    );
    const videos = entries.slice(0, 3).map((entry) => {
      const content = entry[1];
      const videoId = content.match(/<yt:videoId>([^<]+)/)?.[1] ?? "";
      const title = content.match(/<media:title>([^<]+)/)?.[1] ?? "";
      return { videoId, title };
    });

    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).json(videos);
  } catch {
    res.status(500).json([]);
  }
}
