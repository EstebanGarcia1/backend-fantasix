import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los jugadores
export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await prisma.player.findMany({ include: { team: true } });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener jugadores" });
  }
};

// Obtener un jugador por ID
export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const player = await prisma.player.findUnique({
      where: { id: req.params.id },
      include: { team: true },
    });

    if (!player) return res.status(404).json({ error: "Jugador no encontrado" });

    res.json(player);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el jugador" });
  }
};

// Crear un nuevo jugador
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const { nickname, role, teamId, photo, points } = req.body;
    const newPlayer = await prisma.player.create({
      data: { nickname, role, teamId, photo, points },
    });

    res.json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el jugador" });
  }
};

// Actualizar un jugador
export const updatePlayer = async (req: Request, res: Response) => {
  try {
    const { nickname, role, teamId, photo, points } = req.body;
    const updatedPlayer = await prisma.player.update({
      where: { id: req.params.id },
      data: { nickname, role, teamId, photo, points },
    });

    res.json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el jugador" });
  }
};

// Eliminar un jugador
export const deletePlayer = async (req: Request, res: Response) => {
  try {
    await prisma.player.delete({ where: { id: req.params.id } });
    res.json({ message: "Jugador eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el jugador" });
  }
};
