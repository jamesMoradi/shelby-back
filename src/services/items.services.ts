import { ItemModel } from "../models/items.model";

export const findItemId = async (name : string) => {
    const item = await ItemModel.findOne({name})

    return item?._id
}