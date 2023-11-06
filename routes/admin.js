const express= require('express');

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(`<html>
    <head><titile>Add Produt</title></head>
    <body>
    <form action="/admin/product" method="POST">
    <input type="text" name="title">
    <input type="text" name="author">
    <button type="submit" >Add Product</button>
    </form>
    </html>`);
});

router.post("/product", (req, res, next) => {
  const form_data = req.body;
  // console.log(req.body)
  // console.log(JSON.stringify(req.body))

  console.log({ title: form_data.title }, { Author: form_data.author });

  res.redirect("/");
});

module.exports = router