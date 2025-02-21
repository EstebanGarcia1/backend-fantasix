"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchController_1 = require("../controllers/matchController");
const router = (0, express_1.Router)();
router.get("/", matchController_1.getMatches);
router.get("/:id", matchController_1.getMatchById);
router.post("/", matchController_1.createMatch);
router.put("/:id", matchController_1.updateMatch);
router.delete("/:id", matchController_1.deleteMatch);
exports.default = router;
