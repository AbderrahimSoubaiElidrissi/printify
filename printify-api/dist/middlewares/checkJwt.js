"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
exports.checkJwt = (req, res, next) => {
    const token = req.headers["auth"];
    let jwtPayload;
    try {
        jwtPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SIGNATURE_KEY);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        res.status(401).send();
        return;
    }
    const { userId, email } = jwtPayload;
    const newToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SIGNATURE_KEY, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    next();
};
//# sourceMappingURL=checkJwt.js.map