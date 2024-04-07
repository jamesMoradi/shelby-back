import {Schema, model} from "mongoose";

const itemSchema = new Schema({
    name : {
        type : String,
        unique : true
    },
    price : String,
    description : String,
    image : String,
    category : {
        required :true,
        type : String
    }
})

export const ItemModel = model('Item', itemSchema)