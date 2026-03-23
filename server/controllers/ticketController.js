import { pool } from "../config/db.js";

export const buyTicket = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { userId } = req.body;

    console.log("USER ID:", userId);

    const drawRes = await pool.query(
      "SELECT * FROM draws WHERE status = 'pending' ORDER BY draw_date ASC LIMIT 1"
    );

    console.log("DRAW RESULT:", drawRes.rows);

    if (drawRes.rows.length === 0) {
      return res.status(400).json({ error: "No draw found" });
    }

    const drawId = drawRes.rows[0].id;

    const ticketRes = await pool.query(
      `INSERT INTO public.tickets (user_id, draw_id)
       VALUES ($1, $2) RETURNING *`,
      [userId, drawId]
    );

    console.log("SUCCESS:", ticketRes.rows);

    res.json({
      message: "Ticket purchased successfully 🎟️",
      ticket: ticketRes.rows[0],
    });

  } catch (err) {
    console.error("🔥 FINAL BACKEND ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};