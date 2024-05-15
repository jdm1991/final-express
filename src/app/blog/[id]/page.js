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
    <section className="bg-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
            {post.title}
          </h1>
          <p className="text-xl font-medium text-gray-600 mb-8 text-left">
            {post.subtitle}
          </p>
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-left">
            <p className="text-lg font-medium text-gray-700 mb-6">
              {post.body}
            </p>
            <p className="text-sm font-medium text-gray-500">
              Created: {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="text-sm font-medium text-gray-500">
              Updated: {new Date(post.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
