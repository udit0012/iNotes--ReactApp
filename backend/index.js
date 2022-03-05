const express = require("express");
const mongoConnect = require("./db");
const app = express();
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 8000;

mongoConnect();
app.use(cors())
app.use(express.json());

app.use('/inotesApi/auth',require('./routes/auth'));
app.use('/inotesApi/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`);
});
