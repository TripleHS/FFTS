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
exports.PhonesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_phone_dto_1 = require("../dto/phones/create-phone.dto");
const phones_service_1 = require("./phones.service");
let PhonesController = class PhonesController {
    constructor(phonesService) {
        this.phonesService = phonesService;
    }
    getAllPhones() {
        return this.phonesService.findAll();
    }
    getPhoneById(id) {
        return this.phonesService.findOne(id);
    }
    addPhone(phonesDto) {
        return this.phonesService.create(phonesDto);
    }
    deletePhone(id) {
        return this.phonesService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../dto/phones/phone.entity").Phone] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "getAllPhones", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/phones/phone.entity").Phone }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "getPhoneById", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../dto/phones/phone.entity").Phone }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "addPhone", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "deletePhone", null);
PhonesController = __decorate([
    common_1.Controller('phones'),
    __metadata("design:paramtypes", [phones_service_1.PhonesService])
], PhonesController);
exports.PhonesController = PhonesController;
//# sourceMappingURL=phones.controller.js.map