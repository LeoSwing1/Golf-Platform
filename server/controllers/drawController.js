import { pool } from "../config/db.js";
import { generateDrawNumbers, calculateMatches } from "../utils/drawUtils.js";

// ✅ EXISTING DRAW FUNCTION
export const runDraw = async (req, res) => {
  try {
    const drawNumbers = generateDrawNumbers();

    const users = await pool.query("SELECT id FROM users");

    let results = [];

    for (let user of users.rows) {
      const scoresData = await pool.query(
        "SELECT score FROM scores WHERE user_id = $1",
        [user.id]
      );

      const scores = scoresData.rows.map(s => s.score);

      const matchCount = calculateMatches(scores, drawNumbers);

      results.push({
        userId: user.id,
        matches: matchCount,
      });
    }

    res.json({
      drawNumbers,
      results,
    });

  } catch (err) {
    console.error("DRAW ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ NEW FUNCTION
export const getNextDraw = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM draws 
       WHERE status = 'pending' 
       ORDER BY draw_date ASC 
       LIMIT 1`
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No upcoming draw" });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error("DRAW FETCH ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};