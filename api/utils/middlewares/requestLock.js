"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lockRequest = void 0;
const redis_1 = __importDefault(require("../../../repositories/cache/redis"));
const lock_1 = require("../../../repositories/lock");
const lockManager = new lock_1.LockManager(redis_1.default.getClient());
function lockHandler(lockName, ttl) {
    const setLock = async (req, res, next) => {
        try {
            const lock = await lockManager.acquireLock(lockName, ttl);
            res.once('finish', async () => {
                await lockManager.releaseLock(lock);
            });
            next();
        }
        catch (error) {
            next(error);
        }
    };
    return setLock;
}
function lockRequest(controller, lockName, ttl) {
    return [lockHandler(lockName, ttl), controller];
}
exports.lockRequest = lockRequest;
//# sourceMappingURL=requestLock.js.map