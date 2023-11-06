const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).send(`<html>
  <h1>Error: 404</h1>
  </html>`)
})
const server = http.createServer(app);
    
app.listen(4000);
