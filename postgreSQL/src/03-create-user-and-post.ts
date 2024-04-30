import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//here we symultaneously create the user as well as create the post
async function main() {
  await prisma.user.create({
    data: {
      email: "omnigam3@gmail.com",
      name: "Om Nigam",
      posts: {
        create: [
          {
            title: "how to learn HTML",
            content: "Learning HTML by doing it yourself",
          },
          {
            title: "how to learn CSS",
            content: "Learning CSS by doing it yourself",
          },
        ],
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
