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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const postId = parseInt(id);

    // Delete the blog post from the database
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    // Fetch updated blog posts after deleting a post
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(posts);
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return new Response("Failed to delete blog post", { status: 500 });
  }
}
