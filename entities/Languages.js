"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Languages = void 0;
const typeorm_1 = require("typeorm");
const TutorLanguages_1 = require("./TutorLanguages");
let Languages = class Languages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], Languages.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 30
    })
], Languages.prototype, "slug", void 0);
__decorate([
    typeorm_1.OneToMany(() => TutorLanguages_1.TutorLanguages, (tutorLanguage) => tutorLanguage.language)
], Languages.prototype, "tutorLanguages", void 0);
Languages = __decorate([
    typeorm_1.Unique('uniqueLanguageSlug', ['slug']),
    typeorm_1.Entity()
], Languages);
exports.Languages = Languages;
//# sourceMappingURL=Languages.js.map