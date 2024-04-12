"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true
    },
    price: String,
    description: String,
    image: String,
    category: {
        required: true,
        type: String
    }
});
exports.ItemModel = (0, mongoose_1.model)('Item', itemSchema);
