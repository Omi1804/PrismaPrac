import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "How to learn Prisma",
      content: "By doing Practice thoroughly",
      author: {
        //this is how i setting up the relation with user's table
        connect: {
          id: 1,
        },
      },

      // you can also do this whole author thingy as : authorId : 1
    },
  });
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
