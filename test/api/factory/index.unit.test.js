"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mockedSet = jest.fn();
const mockedGet = jest.fn();
jest.mock('../../../api/factory', () => {
    return {
        set: mockedSet,
        get: mockedGet
    };
});
const dummyDB = {
    tutor: {
        getByTutorSlug: jest.fn(),
        getByLanguageSlug: jest.fn()
    }
};
const index_1 = require("../../../api/factory/index");
const languages_1 = require("../../../infra/enums/languages");
const moment_1 = __importDefault(require("moment"));
beforeAll(() => {
    //
});
beforeEach(() => {
    dummyDB.tutor.getByLanguageSlug.mockClear();
    mockedSet.mockClear();
    mockedGet.mockClear();
});
describe('Unit test of getCacheStrategy', () => {
    describe('get tutor list strategy', () => {
        const tutors = index_1.getCacheStrategy(languages_1.CacheStrategy.tutors);
        test('checkIfCacheExists: redis should be called once', async () => {
            await tutors.checkIfCacheExists('dummy');
            expect(mockedGet).toBeCalledTimes(1);
            expect(mockedGet).toBeCalledWith('dummy');
        });
        test('refreshCache', async () => {
            dummyDB.tutor.getByLanguageSlug.mockResolvedValue([
                {
                    id: '1',
                    slug: 'tutor.slug',
                    name: 'tutor.name',
                    headline: 'tutor.headline',
                    introduction: 'tutor.introduction',
                    priceInfo: {
                        trialPrice: 'priceInfo.trialPrice',
                        normalPrice: 'priceInfo.normalPrice'
                    },
                    teachingLanguages: [{ id: '1' }, { id: '2' }]
                }
            ]);
            const expectData = [
                {
                    id: '1',
                    slug: 'tutor.slug',
                    name: 'tutor.name',
                    headline: 'tutor.headline',
                    introduction: 'tutor.introduction',
                    price_info: {
                        trial: 'priceInfo.trialPrice',
                        normal: 'priceInfo.normalPrice'
                    },
                    teaching_languages: ['1', '2']
                }
            ];
            const data = await tutors.refreshCache(languages_1.LanguageSlug.english);
            expect(mockedSet).toBeCalledTimes(1);
            expect(mockedGet).toBeCalledWith(languages_1.LanguageSlug.english, {
                timestamp: expect.any(String),
                data: expectData
            });
            expect(data).toEqual(expectData);
        });
        test('getFromCache', async () => {
            const cacheData = {
                timestamp: new Date().toISOString(),
                data: {}
            };
            const expirationDay = 10;
            const result = await tutors.getFromCache(cacheData, expirationDay, 'dummySlug');
            expect(tutors.isCacheExpired).toBeCalledTimes(1);
            expect(tutors.isCacheExpired).toBeCalledWith(cacheData.timestamp, expirationDay);
            expect(result).toEqual(cacheData.data);
        });
        test('isCacheExpired: true', async () => {
            const result = tutors.isCacheExpired(moment_1.default().subtract(14, 'd').toISOString(), 10);
            expect(result).toBe(true);
        });
        test('isCacheExpired: false', async () => {
            const result = tutors.isCacheExpired(moment_1.default().subtract(5, 'd').toISOString(), 10);
            expect(result).toBe(false);
        });
        test('tranformToResponse', async () => {
            const fake = [
                {
                    id: '1',
                    slug: 'tutor.slug',
                    name: 'tutor.name',
                    headline: 'tutor.headline',
                    introduction: 'tutor.introduction',
                    priceInfo: {
                        trialPrice: 'priceInfo.trialPrice',
                        normalPrice: 'priceInfo.normalPrice'
                    },
                    teachingLanguages: [{ id: '1' }, { id: '2' }]
                }
            ];
            const result = tutors.tranformToResponse(fake);
            expect(result).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: '1',
                    slug: 'tutor.slug',
                    name: 'tutor.name',
                    headline: 'tutor.headline',
                    introduction: 'tutor.introduction',
                    price_info: {
                        trial: 'priceInfo.trialPrice',
                        normal: 'priceInfo.normalPrice'
                    },
                    teaching_languages: ['1', '2']
                })
            ]));
        });
    });
    describe('get a tutor strategy', () => {
        //
    });
});
//# sourceMappingURL=index.unit.test.js.map