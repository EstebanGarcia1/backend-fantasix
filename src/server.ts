import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import router from "./routes";
import logRoutes from "./routes/logs";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

// 🔍 Debug: Imprimir la URL de la base de datos
console.log("🔍 DATABASE_URL usada:", process.env.DATABASE_URL);

// ✅ Configuración de CORS
const allowedOrigins = [
  "https://fantasix.netlify.app", // ✅ Permite Netlify
  "http://localhost:5173", // ✅ Para desarrollo local con Vite
];

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("❌ Bloqueado por CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Aplica CORS correctamente
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Rutas
app.use("/logs", logRoutes);
app.use("/", router);

// ✅ Ruta de prueba
app.get("/", (req, res) => {
  console.log("✅ Servidor en ejecución correctamente");
  res.send("Servidor funcionando 🚀");
});

// ✅ Función para probar la conexión con la base de datos
async function testDBConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Conectado a la base de datos correctamente");
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
  }
}

// 🔥 Inicia el servidor
app.listen(port, async () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${port}`);
  await testDBConnection(); // Prueba la conexión a la BD al iniciar
});
