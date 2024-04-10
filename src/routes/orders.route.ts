import { Router } from "express";
import { createItem, deleteItem, getOrders, updateItem } from "../controllers/items.controller";
import multer from "multer";
import {upload as storage} from '../configs/multer.config'

const route = Router()

route.get('/orders', getOrders)
route.patch('/orders/:name', updateItem)
route.delete('/orders/:name', deleteItem)
route.post('/orders', storage.single('image') ,createItem)

export default route