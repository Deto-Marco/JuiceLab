import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res)=> {
    //Code here
    const {firstName, email, password} = req.body;

    try {
        //Check for existing user
        let existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(400).json({msg: "User Already Exists!"})
        }

        //Create a new user
        const newUser = new userModel({
            firstName,
            email,
            password
        })

        await newUser.save()
        res.status(200).json(newUser)

    } catch (error) {
        res.status(500).send(error)
    }
}