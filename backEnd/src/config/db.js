// import mongoose  from "mongoose";
// export  const  connectDb=async()=>{
// try {
//    await mongoose.connect(process.env.Mongo_URL)

//      console.log("Connected connecting to db")
// } catch (error) {
//     console.log("Error connecting to db",error)
//     process.exit(1)
// }
// }

import mongoose from "mongoose";

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

export  function connectDb(uri = process.env.Mongo_URL) {
  if (!uri) {
    console.error("MongoDB connection string (Mongo_URL) is not set.");
    process.exit(1);
  }

  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    try {
       mongoose.connect(uri);
      console.log("Connected to MongoDB");
      return;
    } catch (err) {
      attempt++;
      console.error(`MongoDB connect attempt ${attempt} failed: ${err.message}`);
      if (attempt >= MAX_RETRIES) {
        console.error("Max MongoDB connect attempts reached. Exiting.");
        process.exit(1);
      }
       new Promise((res) => setTimeout(res, RETRY_DELAY_MS * attempt));
    }
  }
}