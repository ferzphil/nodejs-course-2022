const express = require("express");
const router = express.Router();
const bookRouter = require("./book");
const path = require("path");
const authRouter = require("./auth");

router.get("/", (req, res) => {
  res.render("index", { name: "Daryn" });
});

router.use("/book", bookRouter);
router.use("/auth", authRouter);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../page/404.html"));
});


module.exports = router;