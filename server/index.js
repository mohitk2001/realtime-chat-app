const express = require('express');
const app=express();
const http=require("http");
const {Server} =require("socket.io");
const cors=require('cors');
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        methods:["GET","POST"]
    }
});

app.use(cors());

app.get("/",(req,res)=>{
    res.send("server started up");
})

io.on("connection",(socket)=>{
    console.log("user connected "+socket.id);
    socket.on("join-room",({name,room})=>{
        socket.join(room);

        socket.broadcast.emit("used-joined",({name}));
    });
    socket.on("disconnect",()=>{
        console.log("User disconnected");
    }
    )
})

server.listen(process.env.PORT || 8001,()=>{
    console.log("server started");
})