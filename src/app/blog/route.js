import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const posts = await prisma.post.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
    return Response.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return new Response("Failed to fetch blog posts", { status: 500 });
  }
}
