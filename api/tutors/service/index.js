"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutorsBySlug = void 0;
const config_1 = __importDefault(require("config"));
const moment_1 = __importDefault(require("moment"));
const db_1 = __importDefault(require("../../../repositories/db"));
const checkCache_1 = require("../../../repositories/cache/redis/checkCache");
const languages_1 = require("../../../infra/enums/languages");
async function getTutorsBySlug(languageSlug) {
    const expirationDay = getExpirationDay(languageSlug);
    const cache = await checkIfCacheExists(languageSlug);
    let data = [];
    if (!cache) {
        data = await refreshCache(languageSlug);
    }
    else {
        data = await getFromCache(cache, expirationDay, languageSlug);
    }
    return data;
}
exports.getTutorsBySlug = getTutorsBySlug;
function getExpirationDay(languageSlug) {
    switch (languageSlug) {
        case languages_1.LanguageSlug.english:
            return config_1.default.get(`cache.expirationDays.${languages_1.LanguageSlug.english}`);
        case languages_1.LanguageSlug.chinsese:
            return config_1.default.get(`cache.expirationDays.${languages_1.LanguageSlug.chinsese}`);
        case languages_1.LanguageSlug.japanese:
            return config_1.default.get(`cache.expirationDays.${languages_1.LanguageSlug.japanese}`);
        default:
            throw new Error(`Invalid languageSlug ${languageSlug}`);
    }
}
async function checkIfCacheExists(languageSlug) {
    return checkCache_1.get(languageSlug);
}
async function refreshCache(languageSlug) {
    const rawData = await db_1.default.tutor.getByLanguageSlug(languageSlug);
    const data = rawData.map(tranformToResponse);
    // using floating promise not to block response
    checkCache_1.set(languageSlug, { timestamp: new Date().toISOString(), data }).catch(console.error);
    return data;
}
async function getFromCache(cache, expirationDay, languageSlug) {
    if (isCacheExpired(cache.timestamp, expirationDay)) {
        await refreshCache(languageSlug);
    }
    return cache.data;
}
function isCacheExpired(_timestamp, expirationDay) {
    const now = new Date(); // consider expiration definition and may be using .startOf()
    const timestamp = new Date(_timestamp);
    if (moment_1.default(now).diff(timestamp, 'd') > expirationDay) {
        return true;
    }
    return false;
}
function tranformToResponse(tutor) {
    return {
        id: tutor.id,
        slug: tutor.slug,
        name: tutor.name,
        headline: tutor.headline,
        introduction: tutor.introduction,
        price_info: {
            trial: tutor.priceInfo.trialPrice,
            normal: tutor.priceInfo.normalPrice
        },
        teaching_languages: tutor.teachingLanguages.map((l) => l.id)
    };
}
//# sourceMappingURL=index.js.map