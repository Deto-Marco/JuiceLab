import mongoose from "mongoose";

const fruitListSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        classification: {
            type: String,
            required: true,
        },
        origin:{
            type: String,
            required: true,
        },
});

const fruitListModel = mongoose.model("fruitList", fruitListSchema)

export default fruitListModel;