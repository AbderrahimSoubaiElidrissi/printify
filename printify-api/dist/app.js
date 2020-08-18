"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = __importDefault(require("bluebird"));
const morgan_1 = __importDefault(require("morgan"));
const secrets_1 = require("./util/secrets");
const main_route_1 = require("./routes/main.route");
const cors = require("cors");
const app = express_1.default();
app.use(cors());
// Connect to MongoDB
const mongoUrl = secrets_1.MONGODB_URI;
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default
    .connect(mongoUrl, { useMongoClient: true })
    .then(() => console.log("Connected to Mongodb server"))
    .catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
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