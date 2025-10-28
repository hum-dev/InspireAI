import { writeFileSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = "https://aispireafrica.com";

const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/programs", changefreq: "weekly", priority: 0.9 },
  { url: "/impact", changefreq: "monthly", priority: 0.8 },
  { url: "/get-involved", changefreq: "weekly", priority: 0.9 },
  { url: "/resources", changefreq: "weekly", priority: 0.8 },
  { url: "/events", changefreq: "daily", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 }
].map(route => ({ ...route, lastmod: new Date().toISOString() }));

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });
  const data = await streamToPromise(Readable.from(routes).pipe(stream));
  return data.toString();
}

async function writeSitemap() {
  try {
    const sitemap = await generateSitemap();
    const outputPath = join(dirname(__dirname), "dist", "sitemap.xml");
    writeFileSync(outputPath, sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error writing sitemap:", error);
    process.exit(1);
  }
}

writeSitemap();
