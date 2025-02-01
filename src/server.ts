import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import router from "./routes"; 
import logRoutes from "./routes/logs";

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;  

// 🔍 Imprime la URL de la base de datos para verificar que es correcta
console.log("🔍 DATABASE_URL usada:", process.env.DATABASE_URL);


app.use(cors());
app.use(express.json());
app.use("/logs", logRoutes);
app.use("/", router);

app.get("/", (req, res) => {
  console.log("✅ Servidor en ejecución correctamente");
  res.send("Servidor funcionando");
});

async function testDBConnection() {
  try {
      await prisma.$disconnect();  // 🔥 Cierra la conexión antes de probar
      await prisma.$connect();
      console.log("✅ Conectado a la base de datos correctamente");
  } catch (error) {
      console.error("❌ Error conectando a la base de datos:", error);
  }
}

app.listen(port, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${port}`);
});
