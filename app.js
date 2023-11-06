const http = require("http");
const express = require('express');
const app = express();
app.use((req,res,next)=>{
console.log("I am the first middleware!")
next()
})
app.use((req, res, next) => {
  console.log("I am the Second middleware!");
  res.send({"name":"Sunil"});
});
const server = http.createServer(app);
    
app.listen(4000);
