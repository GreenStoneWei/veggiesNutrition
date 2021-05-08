"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTutors = void 0;
const languages_1 = require("../../../infra/enums/languages");
const service = __importStar(require("../service"));
const getTutors = async (req, res, next) => {
    try {
        if (!Object.keys(languages_1.LanguageSlug).includes(req.params.languageSlug)) {
            throw new Error('language not found');
        }
        const data = await service.getTutorsBySlug(req.params.languageSlug);
        res.send({ data });
    }
    catch (error) {
        next(error);
    }
};
exports.getTutors = getTutors;
//# sourceMappingURL=index.js.map