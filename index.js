
const http= require('http');
const hostname='127.0.0.1' ;
const port=3000;
const server=http.createServer((req , res)=>{
    res.stutusCode=200;
    res.setHeader('context-Type', 'text/plain');
    res.end('Hello World node\n');
})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})