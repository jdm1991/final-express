import { sql } from "@vercel/postgres";

export async function queryDatabase() {
  try {
    const result = await sql`SELECT * FROM your_table`;
    return result;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
}
