"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorsBySlug = void 0;
const languages_1 = require("../../../infra/enums/languages");
const factory_1 = require("../../factory");
async function getTutorsBySlug(languageSlug) {
    const tutors = factory_1.getCacheStrategy(languages_1.CacheStrategy.tutors);
    const expirationDay = tutors.getExpirationDay(languageSlug);
    const cache = await tutors.checkIfCacheExists(languageSlug);
    let data;
    if (!cache) {
        data = await tutors.refreshCache(languageSlug);
    }
    else {
        data = await tutors.getFromCache(cache, expirationDay, languageSlug);
    }
    return data;
}
exports.getTutorsBySlug = getTutorsBySlug;
//# sourceMappingURL=index.js.map