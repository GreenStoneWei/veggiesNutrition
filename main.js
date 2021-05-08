"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
async function main() {
    // TODO: init redis
    // TODO: init db
    const server = http_1.default.createServer(app_1.default);
    server.listen(3000);
    console.log('Tutors API listening on port:3000');
}
main().catch(console.error);
//# sourceMappingURL=main.js.map