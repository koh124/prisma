import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 全ユーザーを取得する
async function getAllUsers() {
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);
}

getAllUsers().finally(() => prisma.$disconnect())
