import fruitListModel from "../Models/fruitListModel.js";


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
        const newPost = new fruitListModel(post)
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({msg: error.message});
    }
};