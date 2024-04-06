import { Request, Response } from "express";
import { ItemModel } from "../models/items.model";
import { findItemId } from "../services/items.services";
import multer from 'multer'

export const getOrders = async (req:Request, res:Response) => {
    try {
        const items = await ItemModel.find()

        res.status(200).json({data : items})
    } catch (error) {
        res.status(500).json({error})
    }
}

export const deleteItem = async (req:Request, res:Response) => {
    try {
        console.log(req.params);
        
        const params = req.params.name
        const id = findItemId(params)
        const deletedItem = await ItemModel.findByIdAndDelete(id)

        res.status(200).json({data : deletedItem})
    } catch (error) {
        res.status(500).json({error})
    }
}

export const updateItem = async (req:Request, res:Response) => {
    try {
        const data = req.body
        const id = findItemId(data.name)
        const updatedItem = await ItemModel.findByIdAndUpdate(id, data)

        res.status(200).json({data : updatedItem})
    } catch (error) {
        res.status(500).json({error})
    }
}

export const createItem = async (req:Request, res:Response) => {
    try {
        const image  = req.file?.path
        const data = req.body        
        console.log({...data, image});
        
         const newItem = await ItemModel.create({...data, image})
        res.status(200).json({data : newItem})
    } catch (error) {
        res.status(500).json({error})
    }
}