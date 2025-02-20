require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');

const connectToDb = require('./src/config/db')

const port = process.env.PORT || 9090;
const db_url = process.env.MONGO_URI;
console.log("MongoDB URI:", process.env.MONGO_URI);

const app = express();

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("This is home route")
})

app.listen(port, async()=>{
    try{

        await connectToDb(db_url)

        console.log("connected to the database")
        console.log(`The server is running at the port: ${port}`)
    }
    catch(err){
        console.log(err)
    }
})