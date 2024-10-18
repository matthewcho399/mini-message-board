const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function createMessage(message, name) {
  await pool.query(
    "INSERT INTO messages (text, name, added) VALUES ($1, $2, NOW())",
    [name, message]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
  return rows;
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
};
