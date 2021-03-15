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
exports.Phone = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../enums");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Phone = class Phone {
    static _OPENAPI_METADATA_FACTORY() {
        return { phoneNumber: { required: true, type: () => String }, user: { required: true, type: () => require("../users/user.entity").User }, phoneType: { required: true, enum: require("../../enums").PhoneType } };
    }
};
__decorate([
    typeorm_1.PrimaryColumn({ name: 'phone_number', length: 25 }),
    class_validator_1.IsPhoneNumber(),
    __metadata("design:type", String)
], Phone.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.phones),
    __metadata("design:type", user_entity_1.User)
], Phone.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'phone_type' }),
    __metadata("design:type", String)
], Phone.prototype, "phoneType", void 0);
Phone = __decorate([
    typeorm_1.Entity()
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phone.entity.js.map