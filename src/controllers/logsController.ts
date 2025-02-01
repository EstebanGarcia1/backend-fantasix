import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 🔹 Obtener todos los logs (ordenados por fecha)
export const getLogs = async (req: Request, res: Response) => {
    try {
        const logs = await prisma.systemLog.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(logs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los logs" });
    }
};

// 🔹 Obtener un log por ID
export const getLogById = async (req: Request, res: Response) => {
    try {
        const { logId } = req.params;
        const log = await prisma.systemLog.findUnique({
            where: { id: logId },
        });

        if (!log) {
            return res.status(404).json({ error: "Log no encontrado" });
        }

        res.json(log);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el log" });
    }
};

// 🔹 Crear un nuevo log
export const createLog = async (req: Request, res: Response) => {
    try {
        const { message, eventType } = req.body;

        const newLog = await prisma.systemLog.create({
            data: {
                message,
                eventType,
            },
        });

        res.status(201).json(newLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el log" });
    }
};

// 🔹 Eliminar un log por ID
export const deleteLog = async (req: Request, res: Response) => {
    try {
        const { logId } = req.params;

        // 🔍 Verificar si el log existe antes de eliminarlo
        const existingLog = await prisma.systemLog.findUnique({
            where: { id: logId }
        });

        if (!existingLog) {
            return res.status(404).json({ error: "El log no existe" });
        }

        await prisma.systemLog.delete({
            where: { id: logId }
        });

        res.json({ message: "Log eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el log" });
    }
};

// 🔹 Limpiar todos los logs
export const clearLogs = async (req: Request, res: Response) => {
    try {
        const deletedLogs = await prisma.systemLog.deleteMany(); // ✅ Eliminar todos los logs

        if (deletedLogs.count === 0) {
            return res.status(404).json({ error: "No hay logs para eliminar" });
        }

        res.json({ message: "Todos los logs han sido eliminados correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar los logs" });
    }
};