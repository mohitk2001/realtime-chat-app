const express = require('express');
const app=express();
const port=process.env.PORT || 8001;
const cors=require('cors');
app.use(cors());
app.listen(port,()=>{
    console.log("server started");
})