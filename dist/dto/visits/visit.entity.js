"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visit = void 0;
const openapi = require("@nestjs/swagger");
const enums_1 = require("../../enums");
const typeorm_1 = require("typeorm");
const organizer_entity_1 = require("../organizers/organizer.entity");
let Visit = class Visit {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, date: { required: true, type: () => Date }, duration: { required: true, type: () => Number }, visitType: { required: true, enum: require("../../enums").VisitType }, users: { required: true, type: () => [require("../users/user.entity").User] }, organizer: { required: true, type: () => require("../organizers/organizer.entity").Organizer } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Visit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Date)
], Visit.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Visit.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column({ name: 'visit_type', length: 15 }),
    __metadata("design:type", String)
], Visit.prototype, "visitType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => organizer_entity_1.Organizer, (organizer) => organizer.visits, {
        cascade: true,
    }),
    __metadata("design:type", organizer_entity_1.Organizer)
], Visit.prototype, "organizer", void 0);
Visit = __decorate([
    typeorm_1.Entity({ name: 'visits' })
], Visit);
exports.Visit = Visit;
//# sourceMappingURL=visit.entity.js.map