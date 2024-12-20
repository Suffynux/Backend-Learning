const http = require("http");
const fs = require("fs");

const hostName = '127.0.0.1'
const port = 3000;
const myServer = http.createServer((req, res) => {
if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')
    res.end("Hello World")
} else if (req.url === '/ice-tea'){
  res.statusCode = 200;
  res.setHeader('Content-Type' , 'text/plain')
  res.end("Chai is ready ")
} else{
  res.statusCode = 404;
  res.setHeader('Content-Type' , 'text/plain')
  res.end("Url not found")
}
})

myServer.listen(port, hostName, () => {
  console.log(`Server is listening at http://${hostName}:${port}`);
})