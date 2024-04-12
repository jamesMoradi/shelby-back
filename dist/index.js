"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_router_1 = __importDefault(require("./src/routes/main.router"));
const mongoose_config_1 = require("./src/configs/mongoose.config");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
console.log(__dirname);
dotenv_1.default.config();
const main = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: '*'
    }));
    app.use(body_parser_1.default.json());
    app.use(express_1.default.json());
    const port = process.env.PORT || 5000;
    (0, mongoose_config_1.connectMongoose)();
    app.use('/api', main_router_1.default);
    app.use('/uploads', express_1.default.static(path_1.default.join('uploads')));
    app.listen(port, () => console.log(`server running on port ${port}`));
};
main();
