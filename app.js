const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next) => {
    res.send(`<html>
    <head><titile>Add Produt</title></head>
    <body>
    <form action="/product" method="POST">
    <input type="text" name="title">
    <button type="submit" >Add Product</button>
    </form>
    </html>`);
});

app.get('/product',(req, res, next) => {
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    res.redirect('/')
});

app.use("/", (req, res, next) => {
  res.send("<html><h1>This is Home Page</h1></html>")
});
const server = http.createServer(app);
    
app.listen(4000);
