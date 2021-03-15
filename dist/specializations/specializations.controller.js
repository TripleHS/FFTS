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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const specializations_service_1 = require("./specializations.service");
const create_specialization_dto_1 = require("./dto/create-specialization.dto");
const update_specialization_dto_1 = require("./dto/update-specialization.dto");
let SpecializationsController = class SpecializationsController {
    constructor(specializationsService) {
        this.specializationsService = specializationsService;
    }
    create(createSpecializationDto) {
        return this.specializationsService.create(createSpecializationDto);
    }
    findAll() {
        return this.specializationsService.findAll();
    }
    findOne(id) {
        return this.specializationsService.findOne(id);
    }
    update(id, updateSpecializationDto) {
        return this.specializationsService.update(id, updateSpecializationDto);
    }
    remove(id) {
        return this.specializationsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./entities/specialization.entity").Specialization }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialization_dto_1.CreateSpecializationDto]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/specialization.entity").Specialization] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/specialization.entity").Specialization }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/specialization.entity").Specialization }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_specialization_dto_1.UpdateSpecializationDto]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "remove", null);
SpecializationsController = __decorate([
    common_1.Controller('specializations'),
    __metadata("design:paramtypes", [specializations_service_1.SpecializationsService])
], SpecializationsController);
exports.SpecializationsController = SpecializationsController;
//# sourceMappingURL=specializations.controller.js.map