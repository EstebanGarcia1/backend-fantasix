import { Router } from "express";
import { getLogs, getLogById, createLog, deleteLog, clearLogs } from "../controllers/logsController";

const router = Router();

router.get("/", getLogs);               // Obtener todos los logs
router.get("/:logId", getLogById);       // Obtener un log por ID
router.post("/", createLog);             // Crear un log
router.delete("/:logId", deleteLog);     // Eliminar un log por ID
router.delete("/clear", clearLogs);      // Limpiar todos los logs

export default router;
