import { createClient } from "@libsql/client";
const url=process.env.TURSO_DATABASE_URL||"file:local.db";
export const db=createClient({url,authToken:process.env.TURSO_AUTH_TOKEN||undefined});
let ready:Promise<void>|null=null;
export function initDb(){if(!ready)ready=(async()=>{await db.batch([
"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)",
"CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, name TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE)",
"CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, list_id INTEGER NOT NULL, name TEXT NOT NULL, quantity TEXT NOT NULL DEFAULT '1', checked INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY(list_id) REFERENCES lists(id) ON DELETE CASCADE)"
],"write");})();return ready;}
export const norm=(v:string)=>v.trim().toLowerCase();