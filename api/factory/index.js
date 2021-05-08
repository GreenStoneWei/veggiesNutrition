"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheStrategy = void 0;
const config_1 = __importDefault(require("config"));
const languages_1 = require("../../infra/enums/languages");
const checkCache_1 = require("../../repositories/cache/redis/checkCache");
const db_1 = __importDefault(require("../../repositories/db"));
const moment_1 = __importDefault(require("moment"));
class TutorsCacheStrategy {
    constructor() { }
    async checkIfCacheExists(slug) {
        return checkCache_1.get(slug);
    }
    async refreshCache(slug) {
        throw new Error();
    }
    async getFromCache(cache, expirationDay, languageSlug) {
        if (this.isCacheExpired(cache.timestamp, expirationDay)) {
            await this.refreshCache(languageSlug);
        }
        return cache.data;
    }
    isCacheExpired(_timestamp, expirationDay) {
        const now = new Date(); // consider expiration definition and may be using .startOf()
        const timestamp = new Date(_timestamp);
        if (moment_1.default(now).diff(timestamp, 'd') > expirationDay) {
            return true;
        }
        return false;
    }
    tranformToResponse(tutor) {
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
}
class TutorsStrategy extends TutorsCacheStrategy {
    constructor(dbInstance) {
        super();
        this.db = dbInstance;
    }
    async refreshCache(slug) {
        const rawData = await this.db.tutor.getByLanguageSlug(slug);
        const data = rawData.map(this.tranformToResponse);
        // using floating promise not to block response
        checkCache_1.set(slug, { timestamp: new Date().toISOString(), data }).catch(console.error);
        return data;
    }
    getExpirationDay(languageSlug) {
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
}
class TutorStrategy extends TutorsCacheStrategy {
    constructor(dbInstance) {
        super();
        this.db = dbInstance;
    }
    async refreshCache(tutorSlug) {
        const rawData = await this.db.tutor.getByTutorSlug(tutorSlug);
        if (!rawData)
            throw new Error('NOT_FOUND');
        const data = this.tranformToResponse(rawData);
        // using floating promise not to block response
        checkCache_1.set(tutorSlug, { timestamp: new Date().toISOString(), data }).catch(console.error);
        return data;
    }
    getExpirationDay() {
        return config_1.default.get('cache.tutor');
    }
}
function getCacheStrategy(resource) {
    switch (resource) {
        case 'tutors':
            return new TutorsStrategy(db_1.default);
        case 'tutor':
            return new TutorStrategy(db_1.default);
        default:
            throw new Error();
    }
}
exports.getCacheStrategy = getCacheStrategy;
//# sourceMappingURL=index.js.map