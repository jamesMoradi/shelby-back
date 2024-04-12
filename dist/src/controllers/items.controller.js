"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = exports.updateItem = exports.deleteItem = exports.getOrders = void 0;
const items_model_1 = require("../models/items.model");
const items_services_1 = require("../services/items.services");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield items_model_1.ItemModel.find();
        res.status(200).json({ data: items });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getOrders = getOrders;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.params.name;
        const id = yield (0, items_services_1.findItemId)(params);
        const deletedItem = yield items_model_1.ItemModel.findByIdAndDelete(id);
        res.status(200).json({ data: deletedItem });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteItem = deleteItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = yield (0, items_services_1.findItemId)(req.params.name);
        const updatedItem = yield items_model_1.ItemModel.findByIdAndUpdate(id, data);
        res.status(200).json({ data: updatedItem });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateItem = updateItem;
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const data = req.body;
        const newItem = yield items_model_1.ItemModel.create(Object.assign(Object.assign({}, data), { image }));
        res.status(200).json({ data: newItem });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.createItem = createItem;
