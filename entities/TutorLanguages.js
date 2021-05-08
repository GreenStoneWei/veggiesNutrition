"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorLanguages = void 0;
const typeorm_1 = require("typeorm");
const Languages_1 = require("./Languages");
const Tutors_1 = require("./Tutors");
let TutorLanguages = class TutorLanguages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], TutorLanguages.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int'
    })
], TutorLanguages.prototype, "tutorId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int'
    })
], TutorLanguages.prototype, "languageId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Tutors_1.Tutors),
    typeorm_1.JoinColumn({
        name: 'tutorId'
    })
], TutorLanguages.prototype, "tutor", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Languages_1.Languages),
    typeorm_1.JoinColumn({
        name: 'languageId'
    })
], TutorLanguages.prototype, "language", void 0);
TutorLanguages = __decorate([
    typeorm_1.Entity()
], TutorLanguages);
exports.TutorLanguages = TutorLanguages;
//# sourceMappingURL=TutorLanguages.js.map