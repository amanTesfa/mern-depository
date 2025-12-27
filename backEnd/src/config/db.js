import mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export  const  connectDb= async ()=>{
try {
   console.log("Wait ....... ")
    await mongoose.connect(process.env.Mongo_URL,{family:4, serverSelectionTimeoutMS: 30000, connectTimeoutMS:30000}).then(()=>{
 console.log("Connected connecting to db")
  }).catch((error)=>{
console.error("message is:",error.message)
  })
    
     
} catch (error) {
    console.error("Error connecting to db",error)
    process.exit(1)
}
}
