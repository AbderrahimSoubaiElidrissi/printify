"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
const checkJwt_1 = require("../middlewares/checkJwt");
const router = express_1.Router();
//Login route
router.post("/login", auth_1.default.login);
router.post("/register", auth_1.default.register);
router.post("/change-password", [checkJwt_1.checkJwt], auth_1.default.changePassword);
exports.default = router;
//# sourceMappingURL=auth.js.map