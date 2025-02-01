import { Router } from "express";
import { getDrafts, getDraftById, createDraft, updateDraft, deleteDraft } from "../controllers/draftController";

const router = Router();

router.get("/", getDrafts);
router.get("/:id", getDraftById);
router.post("/", createDraft);
router.put("/:id", updateDraft);
router.delete("/:id", deleteDraft);

export default router;
