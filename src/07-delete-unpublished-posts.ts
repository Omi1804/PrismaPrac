import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //it deletes all the todos of user which has posts published as False
  await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      posts: {
        deleteMany: {
          published: false,
        },
      },
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
