const path = require("path");
const express = require("express");
const rootDir = require('../util/path') ;
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  const form_data = req.body;
  // console.log(req.body)
  // console.log(JSON.stringify(req.body))

  console.log({ title: form_data.title }, { Author: form_data.author });

  res.redirect("/");
});

module.exports = router;
