"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorsBySlug = void 0;
const languages_1 = require("../../../infra/enums/languages");
const factory_1 = require("../../factory");
const redis_1 = __importDefault(require("../../../repositories/cache/redis"));
const lock_1 = require("../../../repositories/lock");
const lockManager = new lock_1.LockManager(redis_1.default.getClient());
const TTL = 5;
async function getTutorsBySlug(languageSlug) {
    const tutors = factory_1.getCacheStrategy(languages_1.CacheStrategy.tutors);
    const expirationDay = tutors.getExpirationDay(languageSlug);
    const cache = await tutors.checkIfCacheExists(languageSlug);
    let data;
    if (!cache) {
        const lock = await lockManager.acquireLock(languageSlug, TTL);
        const cacheData = await tutors.checkIfCacheExists(languageSlug);
        if (cacheData) {
            await lockManager.releaseLock(lock);
            return cacheData;
        }
        data = await tutors.refreshCache(languageSlug);
        await lockManager.releaseLock(lock);
    }
    else {
        data = await tutors.getFromCache(cache, expirationDay, languageSlug);
    }
    return data;
}
exports.getTutorsBySlug = getTutorsBySlug;
//# sourceMappingURL=index.js.map