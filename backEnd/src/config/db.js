import mongoose  from "mongoose";
export  const  connectDb=()=>{
try {
    mongoose.connect(process.env.Mongo_URL)
     console.log("Connected connecting to db")
} catch (error) {
    console.log("Error connecting to db",error)
    process.exit(1)
}
}

