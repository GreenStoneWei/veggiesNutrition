"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./repositories/db"));
const redis_1 = __importDefault(require("./repositories/cache/redis"));
async function main() {
    await db_1.default.connect(config_1.default.get('db'), { needSync: false });
    await db_1.default.checkConnection();
    redis_1.default.init();
    await redis_1.default.checkConnection();
    const server = http_1.default.createServer(app_1.default);
    server.listen(config_1.default.get('port'));
    console.log('Tutors API listening on port:3000');
}
main().catch(console.error);
//# sourceMappingURL=main.js.map