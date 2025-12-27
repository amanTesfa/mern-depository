import express from "express"
import notes from "./routes/noteRoutes.js"
import { connectDb } from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use(express.json())
app.use("/api/notes",notes)
const Port=process.env.Port||5001
const conn=process.env.Mongo_URL;
connectDb();
app.listen(Port,()=>{
    console.log("the app started at port",Port)
   
})