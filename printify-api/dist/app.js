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
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const secrets_1 = require("./util/secrets");
const main_route_1 = require("./routes/main.route");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
// Connect to MongoDB
(() => {
    const connection = mongoose_1.default.connection;
    connection.on("connected", () => {
        console.log("Mongo Connection Established");
    });
    connection.on("reconnected", () => {
        console.log("Mongo Connection Reestablished");
    });
    connection.on("disconnected", () => {
        console.log("Mongo Connection Disconnected");
        console.log("Trying to reconnect to Mongo ...");
        setTimeout(() => {
            mongoose_1.default.connect(secrets_1.MONGODB_URI);
        }, 3000);
    });
    connection.on("close", () => {
        console.log("Mongo Connection Closed");
    });
    connection.on("error", (error) => {
        console.log("Mongo Connection ERROR: " + error);
    });
    const run = () => __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(secrets_1.MONGODB_URI);
    });
    run().catch(error => console.error(error));
})();
app.use(morgan_1.default("dev"));
app.set("port", process.env.PORT || 3000);
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/**
 * API routes.
 */
app.use("/api/" + process.env.API_VERSION, main_route_1.apiRouter());
exports.default = app;
//# sourceMappingURL=app.js.map