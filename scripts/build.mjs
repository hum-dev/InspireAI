import { execSync } from "child_process";
import path from "path";

try {
  // Compile TypeScript
  console.log("Compiling TypeScript...");
  execSync("tsc --project ./scripts/tsconfig.json", { stdio: "inherit" });

  // Run the compiled JavaScript
  console.log("Generating sitemap...");
  const scriptPath = path.join(
    process.cwd(),
    "dist",
    "scripts",
    "generate-sitemap.js"
  );
  await import(scriptPath);
} catch (error) {
  console.error("Build script failed:", error);
  process.exit(1);
}
