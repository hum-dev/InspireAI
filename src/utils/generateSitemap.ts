import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const baseUrl = "https://aispireafrica.com"; // Replace with your actual domain

// Add all your site's routes here
const routes = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/programs",
    changefreq: "weekly",
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/impact",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/get-involved",
    changefreq: "weekly",
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/resources",
    changefreq: "weekly",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/events",
    changefreq: "daily",
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
];

export async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: baseUrl });
    return streamToPromise(Readable.from(routes).pipe(stream)).then((data) =>
      data.toString()
    );
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw error;
  }
}
