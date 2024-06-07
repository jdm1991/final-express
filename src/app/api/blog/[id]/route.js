// app/api/blog/[id]/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    });
    return Response.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return new Response("Failed to fetch blog post", { status: 500 });
  }
}
