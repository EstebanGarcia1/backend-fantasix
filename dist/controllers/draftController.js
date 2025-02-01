"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDraft = exports.updateDraft = exports.createDraft = exports.getDraftById = exports.getDrafts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDrafts = async (req, res) => {
    try {
        const drafts = await prisma.draft.findMany({ include: { participant: true, player: true } });
        res.json(drafts);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los drafts" });
    }
};
exports.getDrafts = getDrafts;
const getDraftById = async (req, res) => {
    const { id } = req.params;
    try {
        const draft = await prisma.draft.findUnique({ where: { id }, include: { participant: true, player: true } });
        res.json(draft);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el draft" });
    }
};
exports.getDraftById = getDraftById;
const createDraft = async (req, res) => {
    try {
        const { participantId, playerId } = req.body;
        const draftPick = await prisma.draft.create({
            data: { participantId, playerId }
        });
        // 📝 Guardamos en el log
        await prisma.systemLog.create({
            data: {
                message: `El participante ${participantId} seleccionó al jugador ${playerId}`,
                eventType: "DRAFT_PICK"
            }
        });
        res.status(201).json(draftPick);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al seleccionar el jugador en el draft" });
    }
};
exports.createDraft = createDraft;
const updateDraft = async (req, res) => {
    const { id } = req.params;
    try {
        const draft = await prisma.draft.update({ where: { id }, data: req.body });
        res.json(draft);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el draft" });
    }
};
exports.updateDraft = updateDraft;
const deleteDraft = async (req, res) => {
    try {
        const { id } = req.params;
        const draftPick = await prisma.draft.delete({
            where: { id }
        });
        // 📝 Guardamos en el log
        await prisma.systemLog.create({
            data: {
                message: `Se eliminó el pick del draft con ID: ${id}`,
                eventType: "DELETE_DRAFT"
            }
        });
        res.json({ message: "Pick eliminado correctamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el pick del draft" });
    }
};
exports.deleteDraft = deleteDraft;
