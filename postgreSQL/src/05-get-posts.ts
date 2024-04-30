import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const posts = await prisma.post.findMany({}); ---> in this you'll get all the posts it the database

  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          // in this you'll get all the posts along with the post's username and email
          name: true,
          email: true,
        },
      },
    },
  });

  console.log(posts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
