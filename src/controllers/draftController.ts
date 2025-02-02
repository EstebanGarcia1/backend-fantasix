import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateDraft = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { participantId, playerId } = req.body; // Asegurar que vienen los datos correctos

  try {
    // Validar si el draft existe
    const existingDraft = await prisma.draft.findUnique({ where: { id } });

    if (!existingDraft) {
      return res.status(404).json({ error: "Draft no encontrado" });
    }

    // Actualizar el draft
    const updatedDraft = await prisma.draft.update({
      where: { id },
      data: { participantId, playerId },
    });

    // 📝 Guardamos en el log asegurando que `eventType` es un string
    await prisma.systemLog.create({
      data: {
        message: `Draft ${id} actualizado: Participante ${participantId} seleccionó al jugador ${playerId}`,
        eventType: "UPDATE_DRAFT", // ❌ No pasamos un objeto aquí, solo un string
      },
    });

    return res.json(updatedDraft);
  } catch (error) {
    console.error("Error al actualizar el draft:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
