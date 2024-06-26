"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("../controllers/items.controller");
const multer_config_1 = require("../configs/multer.config");
const route = (0, express_1.Router)();
route.get('/orders', items_controller_1.getOrders);
route.patch('/orders/:name', items_controller_1.updateItem);
route.delete('/orders/:name', items_controller_1.deleteItem);
route.post('/orders', multer_config_1.upload.single('image'), items_controller_1.createItem);
exports.default = route;
