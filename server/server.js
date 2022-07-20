import express from "express";
import 'dotenv/config';
import connectDatabase from "./config/mongoDb.js";
import { errorHandler, notFound } from "./middelware/error.js";
import mongoose from "mongoose"
import dotenv from "dotenv"
import user from "./routes/user.js"


connectDatabase();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotenv.config();

//API
app.use("/", user)


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 1000;

app.listen(port, console.log(`server run in port: ${port}`));