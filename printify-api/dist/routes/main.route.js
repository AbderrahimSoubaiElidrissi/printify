"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
exports.apiRouter = () => {
    const router = express_1.default.Router();
    router.use("/users", user_1.userRouter());
    return router;
};
//# sourceMappingURL=main.route.js.map