import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import router from "./routes"; 
import logRoutes from "./routes/logs";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

console.log("🔍 DATABASE_URL usada:", process.env.DATABASE_URL);

// Configurar CORS para Netlify
const allowedOrigins = ["https://fantasix.netlify.app"]; // Cambia esto por el dominio de tu frontend

app.use(cors({
  origin: allowedOrigins, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/logs", logRoutes);
app.use("/", router);

app.get("/", (req, res) => {
  console.log("✅ Servidor en ejecución correctamente");
  res.send("Servidor funcionando");
});

async function testDBConnection() {
  try {
      await prisma.$disconnect();
      await prisma.$connect();
      console.log("✅ Conectado a la base de datos correctamente");
  } catch (error) {
      console.error("❌ Error conectando a la base de datos:", error);
  }
}

app.listen(port, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${port}`);
});
