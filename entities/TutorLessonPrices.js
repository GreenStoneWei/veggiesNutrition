"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorLessonPrices = void 0;
const typeorm_1 = require("typeorm");
const Tutors_1 = require("./Tutors");
let TutorLessonPrices = class TutorLessonPrices {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], TutorLessonPrices.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int'
    })
], TutorLessonPrices.prototype, "tutorId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'double precision'
    })
], TutorLessonPrices.prototype, "trialPrice", void 0);
__decorate([
    typeorm_1.Column({
        type: 'double precision'
    })
], TutorLessonPrices.prototype, "normalPrice", void 0);
__decorate([
    typeorm_1.OneToOne(() => Tutors_1.Tutors, (tutor) => tutor.priceInfo),
    typeorm_1.JoinColumn({
        name: 'tutorId'
    })
], TutorLessonPrices.prototype, "tutor", void 0);
TutorLessonPrices = __decorate([
    typeorm_1.Entity()
], TutorLessonPrices);
exports.TutorLessonPrices = TutorLessonPrices;
//# sourceMappingURL=TutorLessonPrices.js.map