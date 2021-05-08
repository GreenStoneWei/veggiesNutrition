"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorBySlug = void 0;
const languages_1 = require("../../../infra/enums/languages");
const factory_1 = require("../../factory");
async function getTutorBySlug(tutorSlug) {
    const tutor = factory_1.getCacheStrategy(languages_1.CacheStrategy.tutor);
    const cache = await tutor.checkIfCacheExists(tutorSlug);
    const expirationDay = tutor.getExpirationDay();
    let data;
    if (!cache) {
        data = await tutor.refreshCache(tutorSlug);
    }
    else {
        data = await tutor.getFromCache(cache, expirationDay, tutorSlug);
    }
    return data;
}
exports.getTutorBySlug = getTutorBySlug;
//# sourceMappingURL=index.js.map