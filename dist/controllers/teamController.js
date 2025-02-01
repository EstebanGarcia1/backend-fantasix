"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeam = exports.updateTeam = exports.createTeam = exports.getTeamById = exports.getTeams = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTeams = async (req, res) => {
    try {
        const teams = await prisma.team.findMany({ include: { players: true } });
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los equipos" });
    }
};
exports.getTeams = getTeams;
const getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await prisma.team.findUnique({ where: { id }, include: { players: true } });
        res.json(team);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el equipo" });
    }
};
exports.getTeamById = getTeamById;
const createTeam = async (req, res) => {
    try {
        const { name, region } = req.body;
        const newTeam = await prisma.team.create({
            data: { name, region }
        });
        // 📝 Guardamos en el log
        await prisma.systemLog.create({
            data: {
                message: `Se creó un nuevo equipo: ${name} en la región ${region}`,
                eventType: "CREATE_TEAM"
            }
        });
        res.status(201).json(newTeam);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el equipo" });
    }
};
exports.createTeam = createTeam;
const updateTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await prisma.team.update({ where: { id }, data: req.body });
        res.json(team);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el equipo" });
    }
};
exports.updateTeam = updateTeam;
const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.team.delete({
            where: { id }
        });
        // 📝 Guardamos en el log
        await prisma.systemLog.create({
            data: {
                message: `Se eliminó el equipo con ID: ${id}`,
                eventType: "DELETE_TEAM"
            }
        });
        res.json({ message: "Equipo eliminado correctamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el equipo" });
    }
};
exports.deleteTeam = deleteTeam;
