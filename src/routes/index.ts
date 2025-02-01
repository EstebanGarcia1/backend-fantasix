import { Router } from "express";
import teamRoutes from "./teams";
import playerRoutes from "./players";
import draftRoutes from "./draft";
import matchRoutes from "./matches";
import userRoutes from "./users";
import participantRoutes from "./participants";

const router = Router();

// Definir rutas
router.use("/teams", teamRoutes);
router.use("/players", playerRoutes);
router.use("/draft", draftRoutes);
router.use("/matches", matchRoutes);
router.use("/users", userRoutes);
router.use("/participants", participantRoutes);

export default router;
