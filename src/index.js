import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db";

connectDB()












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