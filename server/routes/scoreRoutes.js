import express from "express";
import { createScore, fetchScores } from "../controllers/scoreController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createScore);
router.get("/", protect, fetchScores);

export default router;