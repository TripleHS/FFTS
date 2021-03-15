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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const address_entity_1 = require("../addresses/address.entity");
const enums_1 = require("../../enums");
const typeorm_1 = require("typeorm");
const visit_entity_1 = require("../visits/visit.entity");
const phone_entity_1 = require("../phones/phone.entity");
const organizer_entity_1 = require("../organizers/organizer.entity");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, firstName: { required: false, type: () => String, minLength: 2, maxLength: 25 }, lastName: { required: false, type: () => String, minLength: 2, maxLength: 50 }, username: { required: true, type: () => String, minLength: 2, maxLength: 50 }, userPassword: { required: true, type: () => String, minLength: 7, maxLength: 255 }, email: { required: true, type: () => String }, userRole: { required: true, enum: require("../../enums").UserRole }, description: { required: false, type: () => String, maxLength: 1000 }, addresses: { required: false, type: () => [require("../addresses/address.entity").Address] }, organizers: { required: false, type: () => [require("../organizers/organizer.entity").Organizer] }, phones: { required: true, type: () => [require("../phones/phone.entity").Phone] }, visits: { required: false, type: () => [require("../visits/visit.entity").Visit] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid', { name: 'user_id' }),
    class_validator_1.IsUUID('all'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'first_name', length: 25 }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(25),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: 'last_name', length: 50 }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, unique: true, length: 50 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, name: 'user_password', length: 255 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(7),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], User.prototype, "userPassword", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, unique: true, length: 50 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_role', nullable: false, length: 15 }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "userRole", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 1000 }),
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(1000),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => address_entity_1.Address, (address) => address.user),
    __metadata("design:type", Array)
], User.prototype, "addresses", void 0);
__decorate([
    typeorm_1.OneToMany(() => organizer_entity_1.Organizer, (organizer) => organizer.user),
    __metadata("design:type", Array)
], User.prototype, "organizers", void 0);
__decorate([
    typeorm_1.OneToMany(() => phone_entity_1.Phone, (phone) => phone.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "phones", void 0);
__decorate([
    typeorm_1.ManyToMany(() => visit_entity_1.Visit, (visit) => visit.users, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], User.prototype, "visits", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map