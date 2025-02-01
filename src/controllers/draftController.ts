import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDrafts = async (req: Request, res: Response) => {
  try {
    const drafts = await prisma.draft.findMany({ include: { participant: true, player: true } });
    res.json(drafts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los drafts" });
  }
};

export const getDraftById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const draft = await prisma.draft.findUnique({ where: { id }, include: { participant: true, player: true } });
    res.json(draft);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el draft" });
  }
};

export const createDraft = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al seleccionar el jugador en el draft" });
    }
};

export const updateDraft = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const draft = await prisma.draft.update({ where: { id }, data: req.body });
    res.json(draft);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el draft" });
  }
};

export const deleteDraft = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el pick del draft" });
    }
};
