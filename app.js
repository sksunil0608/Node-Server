const http = require("http");

// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     console.log(req.headers)
//     res.setHeader('Conteny-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>First Node App</title></head>');
//     res.write('<body><h1>This is My first Node App</h1></body>');
//     res.write('</html>');
// })
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.setHeader("Conteny-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
  } 
  else if (req.url === "/about") {
        res.setHeader("Conteny-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>About</title></head>");
        res.write("<body><h1>Welcome to About Us page</h1></body>");
        res.write("</html>");
  } else if (req.url === "/node") {
    res.setHeader("Conteny-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node App</title></head>");
    res.write("<body><h1>Welcome to my NOde JS Project</h1></body>");
    res.write("</html>");
  }
});

server.listen(4000);
