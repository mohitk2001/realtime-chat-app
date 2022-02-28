const express = require('express');
const app=express();
const http=require("http");
const {Server} =require("socket.io");
const cors=require('cors');
const port=process.env.PORT || 8001;

app.use(cors());

const server =http.createServer(app);

const io=new Server(server,{});

io.on("connection",(socket)=>{
    console.log("user connected");

    socket.on("disconnect",()=>{
        console.log("User disconnected");
    }
    )
})

app.listen(port,()=>{
    console.log("server started");
})