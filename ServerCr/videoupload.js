const express= require('express')
const fs= require('fs')
const app = express()

app.get('/',(req , res)=>{
    res.sendFile(__dirname, '/videouploud.html');
});
app.get('/video', (req ,res)=>{
    const range=req.headers.range;
    if(!range){
        res.status(400).send("Require Range Header");

    }
    const videopath= "Lesson one basic syntax.wmv";
    const videoSize =fs.statSync("Lesson one basic syntax.wmv").size;
    const chunk_size = 10 ** 6; //1MB
    const start = Number(range.replace(/\D/g, ""))
    const end= Math.min(start + chunk_size, videoSize-1);
    const contentLength = end -start + 1;
    const headers={
        "Content-Range":`bytes${start}-${end}/${videoSize}`,
        "Accept-Range": "bytes",
        "Contet-Length": contentLength,
         "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream= fs.createReadStream(videopath, {start, end});
    videoStream.pipe(res);
  
});
app.listen(8000, ()=>{
    console.log("Listening on port 8000!");
});