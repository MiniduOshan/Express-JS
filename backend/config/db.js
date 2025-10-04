import mongoose from "mongoose";

export const connectDB=async()=>{
      try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Mongo Connected");

      console.log("DB connection failed:", error.message);
      
      }
};