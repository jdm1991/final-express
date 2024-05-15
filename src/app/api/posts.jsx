import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), { status: 200 });
}
