import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //suppose you want all the users which has emails ending with gmail.com and has atleast one posts published

  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        /// Has atleast one post published
        some: {
          published: true,
        },
      },
    },
  });

  console.log(user);
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
