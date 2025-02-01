"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.updatePlayer = exports.createPlayer = exports.getPlayerById = exports.getPlayers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los jugadores
const getPlayers = async (req, res) => {
    try {
        const players = await prisma.player.findMany({ include: { team: true } });
        res.json(players);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener jugadores" });
    }
};
exports.getPlayers = getPlayers;
// Obtener un jugador por ID
const getPlayerById = async (req, res) => {
    try {
        const player = await prisma.player.findUnique({
            where: { id: req.params.id },
            include: { team: true },
        });
        if (!player)
            return res.status(404).json({ error: "Jugador no encontrado" });
        res.json(player);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el jugador" });
    }
};
exports.getPlayerById = getPlayerById;
// Crear un nuevo jugador
const createPlayer = async (req, res) => {
    try {
        const { nickname, role, teamId, photo, points } = req.body;
        const newPlayer = await prisma.player.create({
            data: { nickname, role, teamId, photo, points },
        });
        res.json(newPlayer);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el jugador" });
    }
};
exports.createPlayer = createPlayer;
// Actualizar un jugador
const updatePlayer = async (req, res) => {
    try {
        const { nickname, role, teamId, photo, points } = req.body;
        const updatedPlayer = await prisma.player.update({
            where: { id: req.params.id },
            data: { nickname, role, teamId, photo, points },
        });
        res.json(updatedPlayer);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el jugador" });
    }
};
exports.updatePlayer = updatePlayer;
// Eliminar un jugador
const deletePlayer = async (req, res) => {
    try {
        await prisma.player.delete({ where: { id: req.params.id } });
        res.json({ message: "Jugador eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar el jugador" });
    }
};
exports.deletePlayer = deletePlayer;
