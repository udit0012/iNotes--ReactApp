const express = require("express");
const mongoConnect = require("./db");
const app = express();
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const port = process.env.PORT || 8000;

mongoConnect();
app.use(cors())
app.use(express.json());

app.use('/inotesApi/auth',require('./routes/auth'));
app.use('/inotesApi/notes',require('./routes/notes'));

const __dirname1 = path.resolve();
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,"/frontend/build")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
    })
}else{
    app.get("/",(req,res)=>{
        res.send("APP running successfully");
    })
}

app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`);
});