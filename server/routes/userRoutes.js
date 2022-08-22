import express from "express";
import { userLogin, userSignup } from "../controllers/userController.js";

const userRoute = express.Router();

//POST - signup
userRoute.post(
    "/signup", 
    userSignup
);

//POST - login
userRoute.post(
    "/login", 
    userLogin
);

export default userRoute;