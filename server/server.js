import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDatabase from "./config/mongoDb.js";
import { errorHandler, notFound } from "./middelware/error.js";
import user from "./routes/user.js"
import fruitRoute from "./routes/fruitListRoutes.js";


connectDatabase();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



//API
app.use("/", user)
app.use("/api/fruits", fruitRoute)





// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 1000;

app.listen(port, console.log(`server run in port: ${port}`));