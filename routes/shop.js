const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<html><h1>This is Home Page</h1></html>");
});

module.exports = router;