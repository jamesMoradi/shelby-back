import { Router } from "express";
import itemsRouter from './orders.route'

const router = Router()
router.use('/', itemsRouter)

export default router