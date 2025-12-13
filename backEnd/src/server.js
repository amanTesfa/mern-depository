import express from "express"
import notes from "./routes/noteRoutes.js"
import { connectDb } from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use("/api/notes",notes)
const Port=process.env.Port_Num||5001
connectDb();
app.listen(Port,()=>{
    console.log("the app started at port",Port)
})