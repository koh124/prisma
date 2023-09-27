import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// ユーザーを作成する
async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Bob'
    }
  })

  console.log('Created new User:', newUser)
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
