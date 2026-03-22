import { pool } from "../config/db.js";

export const addScore = async (userId, score, date) => {
  // get existing scores
  const existing = await pool.query(
    "SELECT * FROM scores WHERE user_id = $1 ORDER BY date ASC",
    [userId]
  );

  if (existing.rows.length >= 5) {
    // delete oldest
    const oldest = existing.rows[0];
    await pool.query("DELETE FROM scores WHERE id = $1", [oldest.id]);
  }

  const result = await pool.query(
    "INSERT INTO scores (user_id, score, date) VALUES ($1, $2, $3) RETURNING *",
    [userId, score, date]
  );

  return result.rows[0];
};

export const getScores = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM scores WHERE user_id = $1 ORDER BY date DESC",
    [userId]
  );
  return result.rows;
};