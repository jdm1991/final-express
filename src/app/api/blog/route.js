// app/api/blog/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const posts = await prisma.post.findMany({
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

export async function POST(request) {
  try {
    const { title, subtitle, image, content } = await request.json();

    const newPost = await prisma.post.create({
      data: {
        title,
        subtitle,
        image,
        content,
      },
    });

    // Fetch updated blog posts after creating a new post
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(posts);
  } catch (error) {
    console.error("Error creating blog post:", error);
    return new Response("Failed to create blog post", { status: 500 });
  }
}
