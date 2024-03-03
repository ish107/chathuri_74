import express from "express";
import mongoose from "mongoose";
import {PORT,mongoDBUrl} from './config.js';
import cors from 'cors';
import {recipeRouter}from "./Routes/recipeRoutes.js";
import {userRouter}from "./Routes/userRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use('/recipe',recipeRouter)
app.use('/auth',userRouter)
app.use(cors());

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
});

mongoose.connect(mongoDBUrl).then(()=>{
    console.log("connected to database")
}).catch((error)=>{
    console.log(error)
});