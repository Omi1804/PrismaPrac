import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({}); //--> to get all the users in the database
  //   console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true, //through this you'll get all the users posts as well as user
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
