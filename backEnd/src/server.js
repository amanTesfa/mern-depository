import express from "express"
import notes from "./routes/noteRoutes.js"
const app=express()
app.use("/api/notes",notes)
app.listen(5001,()=>{
    console.log("the app started at port 5001")
})
