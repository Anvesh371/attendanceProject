const authrouter=require('./routes');
const express=require('express');
const app=express();
app.use(express.json());
app.use("/api",authrouter);
app.listen(2000,()=>{
    console.log("server running");
})