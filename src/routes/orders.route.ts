import { Router } from "express";
import { createItem, deleteItem, getOrders, updateItem } from "../controllers/items.controller";
import multer from "multer";

const route = Router()

route.get('/orders', getOrders)
route.patch('/orders/:name', updateItem)
route.delete('/orders/:name', deleteItem)
route.post('/orders', multer({dest : 'images'}).single('image') ,createItem)

export default route