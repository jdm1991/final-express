import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Blog() {
  const posts = await prisma.post.findMany();

  return (
    <div className="container mx-auto pt-28 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-500">{post.subtitle}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
