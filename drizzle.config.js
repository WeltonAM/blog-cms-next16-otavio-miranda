import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./backend/db/drizzle/migrations",
  schema: "./backend/db/drizzle/schemas.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "./backend/db/database.sqlite3",
  },
});
