import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany({ include: { players: true } });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los equipos" });
  }
};

export const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const team = await prisma.team.findUnique({ where: { id }, include: { players: true } });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el equipo" });
  }
};

export const createTeam = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el equipo" });
    }
};

export const updateTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const team = await prisma.team.update({ where: { id }, data: req.body });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el equipo" });
  }
};

export const deleteTeam = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el equipo" });
    }
};

