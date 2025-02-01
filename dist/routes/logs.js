"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logsController_1 = require("../controllers/logsController");
const router = (0, express_1.Router)();
router.get("/", logsController_1.getLogs); // Obtener todos los logs
router.get("/:logId", logsController_1.getLogById); // Obtener un log por ID
router.post("/", logsController_1.createLog); // Crear un log
router.delete("/:logId", logsController_1.deleteLog); // Eliminar un log por ID
router.delete("/clear", logsController_1.clearLogs); // Limpiar todos los logs
exports.default = router;
