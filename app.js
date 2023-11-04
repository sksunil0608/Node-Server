const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        // const mymessage = fs.readFileSync('message.txt')
        fs.readFile('message.txt',{encoding: "utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }

            res.setHeader("Conteny-Type", "text/html");
            res.write("<html>");
            res.write("<head><title>Register</title></head>");
            res.write(`
        <body>
            <h1>Register</h1>
            <p>All Messages</p>
            <p>${data}</p>
            <form action="/message" method="post">
                <input type ="text" name="message">
                <button type="submit">Submit</button>
            </form>
        </body>`);
            res.write("</html>");
            return res.end();
        });
        
        
    } 
    else if(url==="/message" && method ==="POST"){
        const body = [];
        req.on('data',(chunk)=>{
            // console.log(chunk);
            body.push(chunk);
        });

        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1] +"\n";
            fs.writeFileSync("message.txt", message);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })

    }
});

server.listen(4000);
