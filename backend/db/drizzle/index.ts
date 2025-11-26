import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import Database from "better-sqlite3";
import { resolve } from "path";

const sqlitePath = resolve(process.cwd(), "backend", "db", "database.sqlite3");
const sqliteDatabase = new Database(sqlitePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postsTable,
  },
  // logger: true,
});
