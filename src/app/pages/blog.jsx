import React from "react";
import prisma from "../../../lib/prisma";
import BlogTileSection from "../components/BlogTileSection";

export default function Blog({ posts }) {
  return <BlogTileSection posts={posts} />;
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany();
  console.log("Fetched posts:", posts);
  return {
    props: { posts },
  };
}
