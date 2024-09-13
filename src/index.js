//require('dotenv').config({path:'./env'})
import {app} from './app.js'
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'/.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port : ${process.env.PORT }`);
    })
})
.catch((err)=>{
    console.log("mongodb connection error failed!!!",err);
})












/* 
Raw code but not used in best production grade


import express from "express";
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        app.on("error :", (error)=>{
            console.log("error :", error)
            throw error 
        });
        app.listen(process.env.PORT,()=>{
            console.log(`app is listing on port ${process.env.PORT}`);
        });
             
    } catch (error) {
        console.log("error", error);     
        throw err
    }
})()
*/