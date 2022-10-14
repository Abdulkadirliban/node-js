const http= require('http');
const server= http.createServer((req, res)=>{
    console.log(req.url , req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<h1> My first created server</h1>');
})
server.listen(4000,'localhost',(err)=>{
    console.log('server is running');
})