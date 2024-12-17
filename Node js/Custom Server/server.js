const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
    
  );
  const extname = path.extname(filePath).toLowerCase();

  const fileTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };
  const contentType = fileTypes[extname] || "application/octet-stream";
  fs.readFile(filePath, (err, content) => {
    if (err) {  
        if (err.code === 'ENOENT') {
            res.writeHead(404 , {"Content-Type" : "text/plain"}) 
            res.end("404 : Url is not correct")
        }  
    } else {
      res.writeHead(200 , {'Content-Type' : contentType})
      res.end(content , 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});