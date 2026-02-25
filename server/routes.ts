import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve robots.txt
  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.resolve(process.cwd(), "public", "robots.txt");
    res.type("text/plain");
    res.sendFile(robotsPath);
  });

  // Serve sitemap.xml
  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
    res.type("application/xml");
    res.sendFile(sitemapPath);
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you would:
      // 1. Send an email to team@cyberaktive.com
      // 2. Store the submission in a database
      // 3. Send an auto-response to the user
      // 4. Integrate with your CRM system
      
      console.log("Contact form submission:", validatedData);
      
      // For now, we'll just log the submission and return success
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // YouTube videos - fetch 3 most recent from channel RSS feed
  app.get("/api/youtube-videos", async (_req, res) => {
    try {
      const feedUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=UCFvIstbE78m2NJjC9QS56kg";
      const response = await fetch(feedUrl);
      const xml = await response.text();

      const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g));
      const videos = entries.slice(0, 3).map(entry => {
        const content = entry[1];
        const videoId = content.match(/<yt:videoId>([^<]+)/)?.[1] ?? "";
        const title = content.match(/<media:title>([^<]+)/)?.[1] ?? "";
        return { videoId, title };
      });

      res.setHeader("Cache-Control", "public, max-age=3600");
      res.json(videos);
    } catch {
      res.status(500).json([]);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
