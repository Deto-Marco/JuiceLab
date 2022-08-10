import express from "express";
import { createFruits, deleteFruits, getFruits } from "../controllers/fruitListController.js";

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

fruitRoute.delete(
    "/delete/:id",
    deleteFruits
)
export default fruitRoute;



















