import express from "express";
import { createFruits, deleteFruits, getFruits, updateFruits } from "../controllers/fruitListController.js";

const fruitRoute = express.Router();

// GET ALL FRUIT'S
fruitRoute.get(
    "/",
    getFruits
);
// GET POST FRUIT'S
fruitRoute.post(
    "/create",
    createFruits
);
// GET DELETE FRUIT'S
fruitRoute.delete(
    "/delete/:id",
    deleteFruits
);
// GET PUT FRUIT'S
fruitRoute.put(
    "/put/:id",
    updateFruits
)
export default fruitRoute;



















