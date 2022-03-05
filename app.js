const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server)

io.on('connection',(socket)=>{
    // console.log('Ahi estás de chismoso')
    // socket.on('disconnect',()=>{
    //     console.log('Ya te vas?')
    // })
    socket.on('chat',(msg)=>{
        console.log('Chisma: '+msg)
    })
    socket.on('chat',(msg)=>{
        io.emit('chat',msg)
    })
})

app.get('/',(req,res)=>{
    // console.log(__dirname);
    res.sendFile(`${__dirname}/cliente/index.html`);
})

server.listen(3000, () =>{
    console.log('servidor corriendo en http://localhost:3000')
})