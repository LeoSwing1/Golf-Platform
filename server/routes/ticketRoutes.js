import express from "express";
import { buyTicket } from "../controllers/ticketController.js";

const router = express.Router();

router.post("/buy", buyTicket);

export default router;