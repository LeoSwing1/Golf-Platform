import express from "express";
import { runDraw, getNextDraw } from "../controllers/drawController.js";

const router = express.Router();

router.get("/run", runDraw);
router.get("/next", getNextDraw); // ✅ NEW

export default router;