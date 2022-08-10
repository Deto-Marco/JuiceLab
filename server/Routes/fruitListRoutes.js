import express from "express";
import { createFruits, deleteFruits, getFruits, updateFruits } from "../controllers/fruitListController.js";

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
);
fruitRoute.put(
    "/put/:id",
    updateFruits
)
export default fruitRoute;



















