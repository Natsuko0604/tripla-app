import "dotenv/config";
import { execSync } from "node:child_process";

if (process.env.DATABASE_URL) {
  execSync("npx prisma generate", { stdio: "inherit" });
} else {
  console.log("Skipping prisma generate: DATABASE_URL is not set.");
}
