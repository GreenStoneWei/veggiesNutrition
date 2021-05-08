"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const tutor_1 = __importDefault(require("./tutor"));
const tutors_1 = __importDefault(require("./tutors"));
const router = express_1.Router();
router.use(tutor_1.default);
router.use(tutors_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map