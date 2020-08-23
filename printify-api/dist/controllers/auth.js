"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
class AuthController {
}
AuthController.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = new user_1.default();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        yield user.save();
        const token = user.getJWT();
        return res.status(201).json({ data: { user, token } });
    }
    catch (err) {
        //return error if user unique field already exists
        if (err.name === "MongoError" && err.code === 11000) {
            let field = Object.keys(err.keyValue)[0];
            const response = {
                message: `${field} already exists!`,
                field: field
            };
            return res.status(422).json(response);
        }
        return res.status(409).json({ message: "error saving data" });
    }
});
AuthController.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send();
    }
    let user;
    try {
        user = yield user_1.default.findOne({ email });
    }
    catch (error) {
        res.status(401).send();
    }
    if (!user.validPassword(password)) {
        res.status(401).send();
        return;
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.ACCESS_TOKEN_SIGNATURE_KEY, { expiresIn: "1h" });
    res.send(token);
});
AuthController.changePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = res.locals.jwtPayload.userId;
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
        res.status(400).send();
    }
    let user;
    try {
        user = yield user_1.default.findById(id);
    }
    catch (err) {
        res.status(401).send();
    }
    if (!user.validPassword(oldPassword)) {
        res.status(401).send();
        return;
    }
    user.hashPassword();
    yield user.save(user);
    res.status(204).send();
});
exports.default = AuthController;
//# sourceMappingURL=auth.js.map