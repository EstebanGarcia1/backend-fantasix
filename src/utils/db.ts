import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // ✅ Asegurarse de que esté tomando el DATABASE_URL correcto
    },
  },
});

export default prisma;
