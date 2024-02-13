const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require("./routes/userRoute");

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173' // Replace with your allowed origin
  };

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);

app.get("/",(req,res)=>{
    console.log("called");
    res.send("my api");
    console.log("called 333");
});

const port = process.env.PORT || 5002;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
}).then(()=>{
    console.log("mongo connected");
}).catch((error)=>{
    console.log("mongo connection failed",error.message);
})

app.listen(port, (req,res)=>{
    console.log(`runnning on ${port}`);
})