"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tutors = void 0;
const typeorm_1 = require("typeorm");
const TutorLanguages_1 = require("./TutorLanguages");
let Tutors = class Tutors {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], Tutors.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    })
], Tutors.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    })
], Tutors.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100
    })
], Tutors.prototype, "headline", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    })
], Tutors.prototype, "introduction", void 0);
__decorate([
    typeorm_1.OneToMany(() => TutorLanguages_1.TutorLanguages, (tutorLanguage) => tutorLanguage.language)
], Tutors.prototype, "tutorLanguages", void 0);
Tutors = __decorate([
    typeorm_1.Unique('uniqueTutorSlug', ['slug']),
    typeorm_1.Entity()
], Tutors);
exports.Tutors = Tutors;
//# sourceMappingURL=Tutors.js.map