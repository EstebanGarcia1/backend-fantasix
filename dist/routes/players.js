"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerController_1 = require("../controllers/playerController");
const router = express_1.default.Router();
// Obtener todos los jugadores
router.get("/", playerController_1.getPlayers);
// Obtener un jugador por ID
router.get("/:id", playerController_1.getPlayerById);
// Crear un nuevo jugador
router.post("/", playerController_1.createPlayer);
// Actualizar un jugador
router.put("/:id", playerController_1.updatePlayer);
// Eliminar un jugador
router.delete("/:id", playerController_1.deletePlayer);
exports.default = router;
