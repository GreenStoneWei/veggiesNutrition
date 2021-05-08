"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const config_1 = __importDefault(require("config"));
const ioredis_1 = __importDefault(require("ioredis"));
class RedisService {
    constructor() { }
    init() {
        this._redis = new ioredis_1.default(Object.assign(Object.assign({}, config_1.default.get('redis')), { lazyConnect: true, retryStrategy: () => 3000, maxRetriesPerRequest: 0, autoResendUnfulfilledCommands: false }));
    }
    getClient() {
        return this._redis;
    }
    async checkConnection() {
        return new Promise((resolve, reject) => {
            let counter = 0;
            const timer = setInterval(async () => {
                const result = await this._redis.ping();
                if (result === 'PONG') {
                    clearInterval(timer);
                    resolve(undefined);
                }
                counter++;
                if (counter > 10) {
                    clearInterval(timer);
                    reject('Cannot connect to Redis');
                }
            }, 1000); // ms
        });
    }
}
module.exports = new RedisService();
//# sourceMappingURL=index.js.map