"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
exports.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.find({});
        return yield res.json(user);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: {
                status: 400,
                message: "Bad request."
            }
        });
    }
    try {
        const user = yield user_1.default.findById(id).exec();
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = req.body;
    if (!data) {
        return res.status(400).json({
            error: {
                status: 400,
                message: "Bad request."
            }
        });
    }
    try {
        let user = new user_1.default(data);
        user = yield user.save();
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const patch = req.body;
    if (!id || !patch) {
        return res.status(400).json({
            error: {
                status: 400,
                message: "Bad request."
            }
        });
    }
    try {
        const user = yield user_1.default.findByIdAndUpdate(id, { $set: patch }, { new: true }).exec();
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: {
                status: 400,
                message: "Bad request."
            }
        });
    }
    try {
        yield user_1.default.findByIdAndRemove(id).exec();
        return res.status(204).json({});
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
//# sourceMappingURL=user.js.map