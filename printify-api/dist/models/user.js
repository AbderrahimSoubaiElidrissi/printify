"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const JWT = require("jsonwebtoken");
const userSchema = new mongoose_1.Schema({
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
userSchema.pre("save", function (next) {
    if (this.isNew) {
        var salt = bcryptjs_1.default.genSaltSync(10);
        var hash = bcryptjs_1.default.hashSync(this.password, salt);
        this.password = hash;
    }
    next();
});
userSchema.methods.validPassword = function (inputedPassword) {
    return bcryptjs_1.default.compareSync(inputedPassword, this.password);
};
userSchema.methods.getJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.ACCESS_TOKEN_SIGNATURE_KEY);
};
userSchema.methods.hashPassword = function () {
    this.password = bcryptjs_1.default.hashSync(this.password, 8);
};
const User = mongoose_1.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map