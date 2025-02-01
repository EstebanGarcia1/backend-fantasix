"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParticipant = exports.updateParticipant = exports.createParticipant = exports.getParticipantById = exports.getParticipants = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los participantes
const getParticipants = async (req, res) => {
    try {
        const participants = await prisma.participant.findMany({
            include: { picks: true, draftEntries: true },
        });
        res.json(participants);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los participantes" });
    }
};
exports.getParticipants = getParticipants;
// Obtener un participante por ID
const getParticipantById = async (req, res) => {
    const { id } = req.params;
    try {
        const participant = await prisma.participant.findUnique({
            where: { id },
            include: { picks: true, draftEntries: true },
        });
        if (!participant) {
            return res.status(404).json({ error: "Participante no encontrado" });
        }
        res.json(participant);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el participante" });
    }
};
exports.getParticipantById = getParticipantById;
// Crear un nuevo participante
const createParticipant = async (req, res) => {
    try {
        const { name, photo } = req.body;
        const participant = await prisma.participant.create({
            data: { name, photo },
        });
        res.json(participant);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el participante" });
    }
};
exports.createParticipant = createParticipant;
// Actualizar un participante
const updateParticipant = async (req, res) => {
    const { id } = req.params;
    try {
        const participant = await prisma.participant.update({
            where: { id },
            data: req.body,
        });
        res.json(participant);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el participante" });
    }
};
exports.updateParticipant = updateParticipant;
// Eliminar un participante
const deleteParticipant = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.participant.delete({ where: { id } });
        res.json({ message: "Participante eliminado" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al eliminar el participante" });
    }
};
exports.deleteParticipant = deleteParticipant;
