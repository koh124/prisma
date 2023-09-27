import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateUser(userId, newName) {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { name: newName }
  })
  console.log('Updated user:', updatedUser)
}

updateUser(1, 'John').finally(() => prisma.$disconnect())
