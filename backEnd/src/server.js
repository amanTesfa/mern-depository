import express from "express"
import notes from "./routes/noteRoutes.js"
import { connectDb } from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())

// to control number of request rate limmiting AnimationFrame, authentication and other functionalities wich can be done at the time of sending 
app.use((req, res, next)=>{
    console.log(`the request is ${req.method}, the url is ${req.url} the next is`)
    next() 
})
app.use("/api/notes",notes)
const Port=process.env.Port||5001
const conn=process.env.Mongo_URL;
connectDb().then(()=>{
   app.listen(Port,()=>{
    console.log("the app started at port",Port)
}) 
});
