import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPostData(id) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
  });
  return post;
}

export default async function BlogPost({ params }) {
  const post = await getPostData(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.body}</p>
      <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
      <p>Updated: {new Date(post.updatedAt).toLocaleString()}</p>
    </div>
  );
}
