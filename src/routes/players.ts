import express from "express";
import { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } from "../controllers/playerController";

const router = express.Router();

// Obtener todos los jugadores
router.get("/", getPlayers);

// Obtener un jugador por ID
router.get("/:id", getPlayerById);

// Crear un nuevo jugador
router.post("/", createPlayer);

// Actualizar un jugador
router.put("/:id", updatePlayer);

// Eliminar un jugador
router.delete("/:id", deletePlayer);

export default router;
