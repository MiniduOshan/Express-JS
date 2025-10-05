import express from 'express';
import { User } from '../models/User';
const app = express.Router();

//get all users
app.get("/", async (req,res)=>{
    try{
      const users=await User.find();
      res.status(200).json(users);
    }
    catch(err){
      res.status(500).json(err);
    }
});

