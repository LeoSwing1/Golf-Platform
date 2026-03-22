import { addScore, getScores } from "../models/scoreModel.js";

export const createScore = async (req, res) => {
  try {
    const { score, date } = req.body;

    if (score < 1 || score > 45) {
      return res.status(400).json({ message: "Invalid score range" });
    }

    const newScore = await addScore(req.user, score, date);

    res.json(newScore);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchScores = async (req, res) => {
  try {
    const scores = await getScores(req.user);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};