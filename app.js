const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Conteny-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Register</title></head>");
        res.write(`
        <body>
            <h1>Register</h1>
            <form action="/message" method="post">
                <input type ="text" name="message">
                <button type="submit">Submit</button>
            </form>
        </body>`);
        res.write("</html>");
        return res.end();
    } 
    if(url==="/message" && method ==="POST"){
        const body = [];
        req.on('data',(chunk)=>{
            // console.log(chunk);
            body.push(chunk);
        });

        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // console.log(parsedBody);
            fs.writeFile("message.txt", message,(error=>error));
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })

    }
});

server.listen(4000);
