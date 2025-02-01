"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMatch = exports.updateMatch = exports.createMatch = exports.getMatchById = exports.getMatches = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getMatches = async (req, res) => {
    try {
        const matches = await prisma.match.findMany({ include: { teamA: true, teamB: true } });
        res.json(matches);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los partidos" });
    }
};
exports.getMatches = getMatches;
const getMatchById = async (req, res) => {
    const { id } = req.params;
    try {
        const match = await prisma.match.findUnique({ where: { id }, include: { teamA: true, teamB: true } });
        res.json(match);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el partido" });
    }
};
exports.getMatchById = getMatchById;
const createMatch = async (req, res) => {
    try {
        const match = await prisma.match.create({ data: req.body });
        res.json(match);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el partido" });
    }
};
exports.createMatch = createMatch;
const updateMatch = async (req, res) => {
    const { id } = req.params;
    try {
        const match = await prisma.match.update({ where: { id }, data: req.body });
        res.json(match);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el partido" });
    }
};
exports.updateMatch = updateMatch;
const deleteMatch = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.match.delete({ where: { id } });
        res.json({ message: "Partido eliminado" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar el partido" });
    }
};
exports.deleteMatch = deleteMatch;
