// require('dotenv').config({path: '../.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
// import express from "express";
dotenv.config({path: '../.env'})
// const app = express();


connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("Error connecting to MongoDB:", error);
    throw error
  })
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  })
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    throw err;
});













/*
import express from "express";
const app = express();

(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("Error connecting to MongoDB:", error);
        throw error
      })
      app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
      })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw err
    }
})()
*/