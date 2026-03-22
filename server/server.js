import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" }); // ✅ load env first

import express from "express";
import cors from "cors";

// 🔍 Debug ENV
console.log("ENV DB:", process.env.DATABASE_URL);

import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";

const app = express();

// 🔥 CORS CONFIG (DEV MODE - FULL ACCESS)
app.use(cors());

// 🔥 Middleware
app.use(express.json());

// 🔥 Routes
app.use("/api/auth", authRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/draw", drawRoutes);

// 🧪 Health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🚀 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});