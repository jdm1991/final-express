"use client";

import { useState } from "react";

// Sample data for demonstration purposes
const posts = [
  {
    id: 1,
    title: "Post 1",
    subtitle: "Subtitle for Post 1",
    body: "This is the body content for Post 1.",
    image: "https://example.com/post1.jpg",
    createdAt: "2023-05-01T10:00:00Z",
    updatedAt: "2023-05-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Post 2",
    subtitle: "Subtitle for Post 2",
    body: "This is the body content for Post 2.",
    image: "https://example.com/post2.jpg",
    createdAt: "2023-05-02T12:30:00Z",
    updatedAt: "2023-05-03T09:15:00Z",
  },
  // Add more sample posts as needed
];

export default function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    body: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="flex-grow p-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subtitle"
              className="block text-gray-700 font-semibold"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-gray-700 font-semibold">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Subtitle</th>
                <th className="px-4 py-2">Body</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="even:bg-gray-100">
                  <td className="px-4 py-2 border">{post.id}</td>
                  <td className="px-4 py-2 border">{post.title}</td>
                  <td className="px-4 py-2 border">{post.subtitle}</td>
                  <td className="px-4 py-2 border">{post.body}</td>
                  <td className="px-4 py-2 border">
                    <a
                      href={post.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Image
                    </a>
                  </td>
                  <td className="px-4 py-2 border">
                    {new Date(post.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {new Date(post.updatedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
