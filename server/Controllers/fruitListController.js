import fruitListModel from "../models/fruitListModel.js";


export const getFruits = async (req, res) => {
    try {
        const result = await fruitListModel.find();
        res.status(200).json(result);
    }
    catch (error){
        console.log(error);
    }
};

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

export const deleteFruits = async (req, res) => {
    
    try {
        await fruitListModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Fruit removed!"});
    } catch (error) {
        console.log(error.message);
    }
}