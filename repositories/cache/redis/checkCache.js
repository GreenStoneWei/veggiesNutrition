"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.set = void 0;
const index_1 = __importDefault(require("./index"));
const PREFIX = 'TutorsAPI:tutors:';
async function set(key, data) {
    try {
        return index_1.default.getClient().set(`${PREFIX}:${key}`, JSON.stringify(data));
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.set = set;
async function get(key) {
    try {
        const result = await index_1.default.getClient().get(`${PREFIX}:${key}`);
        return result ? JSON.parse(result) : null;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.get = get;
//# sourceMappingURL=checkCache.js.map