import express from "express";
import cors from "cors";
import userRoutes from "./routes/users";
import teamRoutes from "./routes/teams";

const app = express();

app.use(cors());
app.use(express.json());

// Definir rutas
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);

export default app;
