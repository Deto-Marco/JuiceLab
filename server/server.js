import express from "express";
import 'dotenv/config';
import connectDatabase from "./config/mongoDb.js";
import { errorHandler, notFound } from "./middelware/error.js";


connectDatabase();
const app = express();
app.use(express.json());

//API

console.log("test from Fin");

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 1000;

app.listen(port, console.log(`server run in port: ${port}`));