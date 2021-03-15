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
exports.Specialization = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Specialization = class Specialization {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, scope: { required: true, type: () => String, maxLength: 25 }, details: { required: true, type: () => String, maxLength: 50 } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    class_validator_1.IsUUID('all'),
    __metadata("design:type", String)
], Specialization.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 25 }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(25),
    __metadata("design:type", String)
], Specialization.prototype, "scope", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], Specialization.prototype, "details", void 0);
Specialization = __decorate([
    typeorm_1.Entity()
], Specialization);
exports.Specialization = Specialization;
//# sourceMappingURL=specialization.entity.js.map