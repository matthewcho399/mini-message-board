const { Router } = require("express");
const controller = require("../controllers/controller");
const indexRouter = Router();

indexRouter.get("/", controller.getAllMessages);

indexRouter.get("/new", controller.createMessageGet);
indexRouter.post("/new", controller.createMessagePost);

indexRouter.get("/message/:id", controller.getMessage);

module.exports = indexRouter;

// const { Router } = require("express");

// const indexRouter = Router();

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

// indexRouter.get("/", (req, res) =>
//   res.render("index", { title: "Mini Messageboard", messages: messages })
// );

// indexRouter.get("/new", (req, res) => res.render("form"));

// indexRouter.post("/new", (req, res) => {
//   const messageUser = req.body.name;
//   const messageText = req.body.message;
//   messages.push({
//     text: messageText,
//     user: messageUser,
//     added: new Date(),
//   });
//   res.redirect("/");
// });

// indexRouter.get("/message/:id", (req, res) => {
//   res.render("message", { message: messages[req.params.id] });
// });

// module.exports = indexRouter;
