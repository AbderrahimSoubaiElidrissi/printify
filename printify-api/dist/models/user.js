"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    tokens: Object,
    role: { type: String, default: "USER" },
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    occupation: String,
    phoneNumber: Object,
    identityCardNumber: String,
    address: String,
    zipCode: String,
    city: String,
    country: String
}, { timestamps: true });
userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
        delete ret["password"];
        return ret;
    }
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map