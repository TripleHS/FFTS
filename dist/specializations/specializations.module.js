"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationsModule = void 0;
const common_1 = require("@nestjs/common");
const specializations_service_1 = require("./specializations.service");
const specializations_controller_1 = require("./specializations.controller");
const specialization_entity_1 = require("./entities/specialization.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SpecializationsModule = class SpecializationsModule {
};
SpecializationsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([specialization_entity_1.Specialization])],
        controllers: [specializations_controller_1.SpecializationsController],
        providers: [specializations_service_1.SpecializationsService],
    })
], SpecializationsModule);
exports.SpecializationsModule = SpecializationsModule;
//# sourceMappingURL=specializations.module.js.map