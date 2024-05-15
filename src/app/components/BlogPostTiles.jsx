"use client";

import React, { useState, useEffect } from "react";

const BlogPostTiles = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/blog");
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
            Latest Industry Insights:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-green-100 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-[#255036] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.subtitle}</p>
                <p className="text-gray-600">
                  Created: {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostTiles;
