"use strict";
const express_1 = require("express");
const controller_1 = require("./controller");
const api = express_1.Router();
api.get('/tutor/:slug', controller_1.getBySlug);
module.exports = api;
//# sourceMappingURL=index.js.map