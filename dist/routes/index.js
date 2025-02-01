"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teams_1 = __importDefault(require("./teams"));
const players_1 = __importDefault(require("./players"));
const draft_1 = __importDefault(require("./draft"));
const matches_1 = __importDefault(require("./matches"));
const users_1 = __importDefault(require("./users"));
const participants_1 = __importDefault(require("./participants"));
const router = (0, express_1.Router)();
// Definir rutas
router.use("/teams", teams_1.default);
router.use("/players", players_1.default);
router.use("/draft", draft_1.default);
router.use("/matches", matches_1.default);
router.use("/users", users_1.default);
router.use("/participants", participants_1.default);
exports.default = router;
