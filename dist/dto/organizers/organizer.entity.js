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
exports.Organizer = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const address_entity_1 = require("../addresses/address.entity");
const user_entity_1 = require("../users/user.entity");
const visit_entity_1 = require("../visits/visit.entity");
let Organizer = class Organizer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, user: { required: true, type: () => require("../users/user.entity").User }, address: { required: true, type: () => require("../addresses/address.entity").Address }, visits: { required: true, type: () => [require("../visits/visit.entity").Visit] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Organizer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 25 }),
    __metadata("design:type", String)
], Organizer.prototype, "title", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.organizers, { cascade: true }),
    __metadata("design:type", user_entity_1.User)
], Organizer.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => address_entity_1.Address, (address) => address.organizers, { cascade: true }),
    __metadata("design:type", address_entity_1.Address)
], Organizer.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(() => visit_entity_1.Visit, (visit) => visit.organizer),
    __metadata("design:type", Array)
], Organizer.prototype, "visits", void 0);
Organizer = __decorate([
    typeorm_1.Entity({ name: 'organizers' })
], Organizer);
exports.Organizer = Organizer;
//# sourceMappingURL=organizer.entity.js.map