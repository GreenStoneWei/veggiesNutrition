"use strict";
const express_1 = require("express");
const controller_1 = require("./controller");
const api = express_1.Router();
api.get('/tutors/:languageSlug', controller_1.getTutors);
module.exports = api;
//# sourceMappingURL=index.js.map