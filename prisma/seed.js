const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Sample Blog Post",
      subtitle: "This is a sample blog post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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
