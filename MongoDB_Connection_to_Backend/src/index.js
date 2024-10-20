import connectDB from "./db/Database.js";
import dotevn from "dotenv"
import express from "express"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"

dotevn.config({
    path:'./env'
})
connectDB()

const app = express()
const port =  process.env.PORT || 4000

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to the backend!')
});

app.use((req,res,next)=>{
    res.status(404).send({message:'Route not found'});
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})