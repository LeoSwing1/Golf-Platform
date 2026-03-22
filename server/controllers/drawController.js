import { generateDrawNumbers, calculateMatches } from "../utils/drawUtils.js";
import { calculatePrizeDistribution } from "../utils/prizeUtils.js";
import { pool } from "../config/db.js";

export const runDraw = async (req, res) => {
  try {
    const drawNumbers = generateDrawNumbers();

    // get all users
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
        category:
          matchCount === 5
            ? "Jackpot"
            : matchCount === 4
            ? "Tier 2"
            : matchCount === 3
            ? "Tier 3"
            : "No Win",
      });
    }

    // 💰 Prize Pool (example logic)
    const totalPool = users.rows.length * 100; // ₹100 per user

    const prizeData = calculatePrizeDistribution(results, totalPool);

    res.json({
      drawNumbers,
      totalUsers: users.rows.length,
      totalPool,
      prizeData,
      results,
    });

  } catch (err) {
    console.error("DRAW ERROR:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};