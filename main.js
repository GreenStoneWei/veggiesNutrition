"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const db_1 = __importDefault(require("./repositories/db"));
// import redis from './repositories/cache/redis'
async function main() {
    // await db.connect(config.get('db'), { needSync: false })
    await db_1.default.connectTdNd(config_1.default.get('tfndDb'), { needSync: false });
    await db_1.default.checkConnection();
    // redis.init()
    // await redis.checkConnection()
    const result = await db_1.default.tfnd.getByName('大蒜');
    console.log('result', result);
    // const server = http.createServer(app)
    // server.listen(config.get('port'))
    // console.log('Tutors API listening on port:3000')
}
main().catch(console.error);
//# sourceMappingURL=main.js.map