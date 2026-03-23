import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

import express from "express";
import cors from "cors";

console.log("ENV DB:", process.env.DATABASE_URL);

import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

const app = express();

// ✅ MIDDLEWARE FIRST
app.use(cors());
app.use(express.json()); // 🔥 MUST COME BEFORE ROUTES

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/draw", drawRoutes);
app.use("/api/ticket", ticketRoutes); // moved here

// ✅ HEALTH CHECK
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🚀 START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});