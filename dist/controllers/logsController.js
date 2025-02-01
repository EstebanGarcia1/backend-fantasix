"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLogs = exports.deleteLog = exports.createLog = exports.getLogById = exports.getLogs = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 🔹 Obtener todos los logs (ordenados por fecha)
const getLogs = async (req, res) => {
    try {
        const logs = await prisma.systemLog.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(logs);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los logs" });
    }
};
exports.getLogs = getLogs;
// 🔹 Obtener un log por ID
const getLogById = async (req, res) => {
    try {
        const { logId } = req.params;
        const log = await prisma.systemLog.findUnique({
            where: { id: logId },
        });
        if (!log) {
            return res.status(404).json({ error: "Log no encontrado" });
        }
        res.json(log);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el log" });
    }
};
exports.getLogById = getLogById;
// 🔹 Crear un nuevo log
const createLog = async (req, res) => {
    try {
        const { message, eventType } = req.body;
        const newLog = await prisma.systemLog.create({
            data: {
                message,
                eventType,
            },
        });
        res.status(201).json(newLog);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el log" });
    }
};
exports.createLog = createLog;
// 🔹 Eliminar un log por ID
const deleteLog = async (req, res) => {
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el log" });
    }
};
exports.deleteLog = deleteLog;
// 🔹 Limpiar todos los logs
const clearLogs = async (req, res) => {
    try {
        const deletedLogs = await prisma.systemLog.deleteMany(); // ✅ Eliminar todos los logs
        if (deletedLogs.count === 0) {
            return res.status(404).json({ error: "No hay logs para eliminar" });
        }
        res.json({ message: "Todos los logs han sido eliminados correctamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar los logs" });
    }
};
exports.clearLogs = clearLogs;
