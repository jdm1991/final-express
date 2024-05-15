const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Clear all data from the database
  await prisma.$transaction([
    prisma.post.deleteMany(),
    // Add any other models you want to clear here
  ]);

  console.log("Database cleared.");

  // Seed new data
  const post1 = await prisma.post.create({
    data: {
      title: "Sample Blog Post",
      subtitle: "This is a sample blog post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://example.com/sample-image.jpg",
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Another Blog Post",
      subtitle: "Learn about this exciting topic",
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
      image: "https://example.com/another-image.jpg",
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: "The Latest News",
      subtitle: "Stay updated with the latest trends",
      body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      image: "https://example.com/latest-news.jpg",
    },
  });

  console.log("Created blog posts:", post1, post2, post3);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
