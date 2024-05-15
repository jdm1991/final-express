import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function generateMetadata() {
  const posts = await prisma.post.findMany();
  return {
    title: "Blog Posts",
    description: "List of all blog posts",
  };
}

export default async function BlogPostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
