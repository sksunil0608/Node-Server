const http = require("http");
const express = require('express');
const app = express();
app.use((req,res,next)=>{
console.log("I am the first middleware!")
next()
})
app.use((req, res, next) => {
  console.log("I am the Second middleware!");
  res.send('<h1>This is second MiddleWare</h1>')
});
const server = http.createServer(app);
    
server.listen(4000);
