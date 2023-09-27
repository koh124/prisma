## Prisma × MySQL（コンテナ）

1. MySQL コンテナをスタート

```
docker-compose -f mysql/docker-compose.yml up
```

2. prisma をセットアップ

```
npm init -y
npm insatall @prisma/client
npm install prisma
npx prisma init
```

3. prisma/schema.prisma に DB スキーマを書く

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
}
```

4. prisma でマイグレートする

```
npx prisma migrate dev --name init
```

5. mysql コンテナに入る

```
docker exec -it mysql bash
```

6. mysql のデータベースを見る

```
mysql -uroot -proot
or
mysql -u root -p
> root

mysql > show databases;
mysql > use mydb;
mysql > show tables;
mysql > desc User;
```

7. prisma クライアントで DB にシードする

```
node orm/create.js
node orm/get.js
node orm/update.js
```
