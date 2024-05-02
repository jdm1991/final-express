// BlogTileSection.jsx
import React from "react";
import prisma from "../prisma";
import Image from "next/image";

export const getServerSideProps = async () => {
  // Fetch data from the database
  const posts = await prisma.post.findMany();

  return {
    props: { posts },
  };
};

const BlogTileSection = ({ posts }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/placeholder-image.jpg" // Replace with your actual image source
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTileSection;
