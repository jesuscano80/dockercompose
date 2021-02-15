const express=require("express");
const routes= require("./routes/index.routes");
const app=express();
require("./database");
app.use(routes);
app.get("/hola",(req,res)=>{
    res.send("dime hola");
})

app.listen(3000);
console.log("server on port",3000);