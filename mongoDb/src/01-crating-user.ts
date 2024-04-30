import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@gmail.com",
      name: "Om Nigam",
      posts: {
        create: {
          title: "My second post",
          body: "Lots of really interesting posts",
          slug: "my-second-post",
        },
      },
    },
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
