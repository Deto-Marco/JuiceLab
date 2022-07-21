import express from "express";
import { createFruits, getFruits } from "../controllers/fruitListController.js";

const fruitRoute = express.Router();

// GET ALL FRUIT'S
fruitRoute.get(
    "/",
    getFruits
);

fruitRoute.post(
    "/create",
    createFruits
);
export default fruitRoute;



















