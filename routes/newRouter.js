const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) =>
  res.send("Hello this is the new messages page")
);

module.exports = newRouter;
