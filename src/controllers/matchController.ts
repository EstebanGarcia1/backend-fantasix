import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await prisma.match.findMany({ include: { teamA: true, teamB: true } });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los partidos" });
  }
};

export const getMatchById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const match = await prisma.match.findUnique({ where: { id }, include: { teamA: true, teamB: true } });
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el partido" });
  }
};

export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = await prisma.match.create({ data: req.body });
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el partido" });
  }
};

export const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const match = await prisma.match.update({ where: { id }, data: req.body });
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el partido" });
  }
};

export const deleteMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.match.delete({ where: { id } });
    res.json({ message: "Partido eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el partido" });
  }
};
