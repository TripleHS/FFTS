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
exports.Address = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
const organizer_entity_1 = require("../organizers/organizer.entity");
let Address = class Address {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, street: { required: true, type: () => String }, building: { required: true, type: () => String }, apartment: { required: true, type: () => String }, postalCode: { required: true, type: () => String }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, country: { required: true, type: () => String }, additionalInfo: { required: true, type: () => String }, user: { required: true, type: () => require("../users/user.entity").User }, organizers: { required: false, type: () => [require("../organizers/organizer.entity").Organizer] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'street', length: 50 }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    typeorm_1.Column({ name: 'building', length: 15 }),
    __metadata("design:type", String)
], Address.prototype, "building", void 0);
__decorate([
    typeorm_1.Column({ name: 'apartment', length: 10, nullable: true }),
    __metadata("design:type", String)
], Address.prototype, "apartment", void 0);
__decorate([
    typeorm_1.Column({ name: 'postal_code', length: 6 }),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'city', length: 50 }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    typeorm_1.Column({ name: 'country_state', length: 25 }),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ name: 'country', length: 50 }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    typeorm_1.Column({ name: 'additional_info', length: 1000, nullable: true }),
    __metadata("design:type", String)
], Address.prototype, "additionalInfo", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.addresses, { cascade: true }),
    __metadata("design:type", user_entity_1.User)
], Address.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => organizer_entity_1.Organizer, (organizer) => organizer.address),
    __metadata("design:type", Array)
], Address.prototype, "organizers", void 0);
Address = __decorate([
    typeorm_1.Entity()
], Address);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map