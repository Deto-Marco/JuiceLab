import fruitListModel from "../models/fruitListModel.js";

// Get the Product's
export const getFruits = async (req, res) => {
    try {
        const result = await fruitListModel.find();
        res.status(200).json(result);
    }
    catch (error){
        console.log(error);
    }
};
// Create the Product's
export const createFruits = async (req, res) => {
    const post = req.body
    try {
        const newFruit = new fruitListModel(post)
        await newFruit.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({msg: error.message});
    }
};
// Delete the Product's
export const deleteFruits = async (req, res) => {
    
    try {
        await fruitListModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Fruit removed!"});
    } catch (error) {
        console.log(error.message);
    }
};
// Update the Product's

export const updateFruits = async (req, res) => {

    try{
        const fruit = await fruitListModel.findByIdAndUpdate(req.params.id, req.body,
            {new:true},);
        res.status(200).json(fruit);
    } catch(err) {
       console.log(err.message);
    }
};