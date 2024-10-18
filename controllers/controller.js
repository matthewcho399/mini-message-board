const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
}

const createMessageGet = (req, res) => {
  res.render("form");
};

async function createMessagePost(req, res) {
  const messageUser = req.body.name;
  const messageText = req.body.message;
  await db.createMessage(messageText, messageUser);
  res.redirect("/");
}

async function getMessage(req, res) {
  const message = await db.getMessage(req.params.id);
  res.render("message", { message: message[0] });
}

module.exports = {
  getAllMessages,
  createMessageGet,
  createMessagePost,
  getMessage,
};
