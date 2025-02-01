import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los participantes
export const getParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await prisma.participant.findMany({
      include: { picks: true, draftEntries: true },
    });
    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los participantes" });
  }
};

// Obtener un participante por ID
export const getParticipantById = async (req: Request, res: Response) => {
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
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el participante" });
  }
};

// Crear un nuevo participante
export const createParticipant = async (req: Request, res: Response) => {
  try {
    const { name, photo } = req.body;
    const participant = await prisma.participant.create({
      data: { name, photo },
    });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el participante" });
  }
};

// Actualizar un participante
export const updateParticipant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const participant = await prisma.participant.update({
      where: { id },
      data: req.body,
    });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el participante" });
  }
};

// Eliminar un participante
export const deleteParticipant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.participant.delete({ where: { id } });
    res.json({ message: "Participante eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el participante" });
  }
};
