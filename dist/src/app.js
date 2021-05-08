"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const version = require('./package.json').version;
const app = express_1.default();
app.use(body_parser_1.json({ limit: '1mb' }));
app.use(body_parser_1.urlencoded({ limit: '1mb', extended: false }));
app.get('/', (_req, res) => {
    res.send({ version });
});
exports.default = app;
//# sourceMappingURL=app.js.map