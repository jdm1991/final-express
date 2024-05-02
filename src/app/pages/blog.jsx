import React from "react";
import axios from "axios";
import BlogTileSection from "../components/BlogTileSection";

export default function Blog({ posts }) {
  return <BlogTileSection posts={posts} />;
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3001/api/posts");
    const posts = response.data;
    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] },
    };
  }
}
