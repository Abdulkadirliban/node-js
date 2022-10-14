const express= require('express')
const app= express();

// app.get('/',(req, res)=>{
//     res.send('<h1> Welcome to express </h1>')
// })
app.get('/',(req, res)=>{
   res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/register',(req, res)=>{
    res.sendFile('./views/register.html',{root:__dirname})
 })
app.use((req, res)=>{
    res.sendFile('./views/404.html',{root: __dirname})
})
app.listen(8000)