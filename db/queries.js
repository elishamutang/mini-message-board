import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [messageId]);
  return rows;
}

async function postMessage(message) {
  await pool.query("INSERT INTO messages (username, message, created_at) VALUES (($1), ($2), CURRENT_TIMESTAMP)", [
    message.username,
    message.message,
  ]);
}

export { getAllMessages, getMessage, postMessage };
