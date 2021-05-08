"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockManager = void 0;
const redlock_1 = __importDefault(require("redlock"));
class LockManager {
    constructor(client) {
        this.lock = this.initRedisLock(client);
    }
    async acquireLock(lockName, ttl) {
        try {
            const lock = await this.lock.acquire(lockName, ttl);
            return {
                name: lockName,
                lock
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async releaseLock(lockInstance) {
        try {
            await this.lock.release(lockInstance.lock);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async extendLock(lockInstance, ttl) {
        await this.lock.extend(lockInstance.lock, ttl);
    }
    initRedisLock(client) {
        const lock = new redlock_1.default([client], {
            retryCount: 10,
            retryDelay: 1000
        });
        lock.on('clientError', (error) => {
            console.error(error);
        });
        return lock;
    }
}
exports.LockManager = LockManager;
//# sourceMappingURL=index.js.map