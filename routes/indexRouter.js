const { Router } = require("express");
const controller = require("../controllers/controller");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("hi"));

indexRouter.get("/new", controller.createMessageGet);
indexRouter.post("/new", controller.createMessagePost);

indexRouter.get("/message/:id", controller.getMessage);

module.exports = indexRouter;
