import fs from "fs";
import path from "path";
import { generateSitemap } from "./src/utils/generateSitemap";

async function writeSitemap() {
  try {
    const sitemap = await generateSitemap();
    const outputPath = path.join(__dirname, "dist", "sitemap.xml");

    fs.writeFileSync(outputPath, sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error writing sitemap:", error);
    process.exit(1);
  }
}

writeSitemap();
