"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorsBySlug = void 0;
const config_1 = __importDefault(require("config"));
const EXPIRATION_DAYS = config_1.default.get('cache.tutor');
async function getTutorsBySlug(tutorSlug) {
    const cache = await checkIfCacheExists(languageSlug);
    let data = [];
    if (!cache) {
        data = await refreshCache(languageSlug);
    }
    else {
        data = await getFromCache(cache, expirationDay, languageSlug);
    }
}
exports.getTutorsBySlug = getTutorsBySlug;
//# sourceMappingURL=index.js.map