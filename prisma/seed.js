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
  const post = await prisma.post.create({
    data: {
      title: "Sample Blog Post",
      subtitle: "This is a sample blog post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://example.com/sample-image.jpg",
    },
  });

  console.log("Created blog post:", post);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
