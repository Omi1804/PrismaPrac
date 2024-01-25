import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "omnigam@gmail.com",
      name: "Om Nigam",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect(); //once the query is done it disconnects from the database as its a good practice to dissconnects once the task is done
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
