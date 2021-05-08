"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBySlug = void 0;
const lock_1 = require("../../../repositories/lock");
const redis_1 = __importDefault(require("../../../repositories/cache/redis"));
const service = __importStar(require("../service"));
const LOCK_TTL = 5; // in seconds
const lockManager = new lock_1.LockManager(redis_1.default.getClient());
const getBySlug = async (req, res, next) => {
    let lock;
    try {
        const tutorSlug = req.params.tutorSlug;
        // lock = await lockManager.acquireLock(tutorSlug, LOCK_TTL)
        const data = await service.getTutorBySlug(tutorSlug);
        res.send({ data });
    }
    catch (error) {
        next(error);
    }
    finally {
        if (lock)
            await lockManager.releaseLock(lock);
    }
};
exports.getBySlug = getBySlug;
//# sourceMappingURL=index.js.map