// app/admin/page.js
"use client";
import { useState, useEffect } from "react";

const ClientAdminPage = () => {
  // State for blog inputs
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubtitle, setBlogSubtitle] = useState("");
  const [blogImageUrl, setBlogImageUrl] = useState("");
  const [blogContent, setBlogContent] = useState("");

  // State for blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch blog posts from the database
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: blogTitle,
          subtitle: blogSubtitle,
          image: blogImageUrl,
          content: blogContent,
        }),
      });

      if (response.ok) {
        const newPost = await response.json();
        setBlogPosts([newPost, ...blogPosts]);

        // Reset form inputs
        setBlogTitle("");
        setBlogSubtitle("");
        setBlogImageUrl("");
        setBlogContent("");
      } else {
        console.error("Error creating blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };
  
const handleDelete = async (id) => {
  try {
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Fetch updated blog posts after successful deletion
      const posts = await response.json();
      setBlogPosts(posts);
    } else {
      console.error("Error deleting blog post");
    }
  } catch (error) {
    console.error("Error deleting blog post:", error);
  }
};

  return (
    <div className="min-h-screen pt-28 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="blogTitle" className="block font-bold mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="blogTitle"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blogSubtitle" className="block font-bold mb-2">
              Blog Subtitle
            </label>
            <input
              type="text"
              id="blogSubtitle"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={blogSubtitle}
              onChange={(e) => setBlogSubtitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blogImageUrl" className="block font-bold mb-2">
              Blog Image URL
            </label>
            <input
              type="text"
              id="blogImageUrl"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={blogImageUrl}
              onChange={(e) => setBlogImageUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blogContent" className="block font-bold mb-2">
              Blog Content
            </label>
            <textarea
              id="blogContent"
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-64"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <h2 className="text-2xl font-bold mt-8 mb-4">Current Blog Posts</h2>
        <table className="w-full border-collapse mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Subtitle</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post.id}>
                <td className="py-2 px-4 border-b">{post.id}</td>
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.subtitle}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientAdminPage;
