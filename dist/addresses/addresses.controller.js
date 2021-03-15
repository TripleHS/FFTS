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
exports.AddressesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_address_dto_1 = require("../dto/addresses/create-address.dto");
const edit_address_dto_1 = require("../dto/addresses/edit-address.dto");
const address_validation_1 = require("./address-validation");
const addresses_service_1 = require("./addresses.service");
let AddressesController = class AddressesController {
    constructor(addressesService) {
        this.addressesService = addressesService;
    }
    getAllUsers() {
        return this.addressesService.findAll();
    }
    getAddressById(id) {
        return this.addressesService.findOne(id);
    }
    getAddressesByUserId(id) {
        return this.addressesService.findByUserId(id);
    }
    addAddress(addressDto) {
        const address = address_validation_1.AddressCreationValidation.validate(addressDto);
        if (address.error) {
            return address.error;
        }
        return this.addressesService.create(addressDto);
    }
    deleteAddress(id) {
        return this.addressesService.remove(id);
    }
    editFields(id, addressDto) {
        const address = address_validation_1.AddressEditionValidation.validate(addressDto);
        if (address.error) {
            return address.error;
        }
        return this.addressesService.edit(id, addressDto);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../dto/addresses/address.entity").Address] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/addresses/address.entity").Address }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "getAddressById", null);
__decorate([
    common_1.Get('user/:id'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/addresses/address.entity").Address] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "getAddressesByUserId", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "addAddress", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "deleteAddress", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_address_dto_1.EditAddressDto]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "editFields", null);
AddressesController = __decorate([
    common_1.Controller('addresses'),
    __metadata("design:paramtypes", [addresses_service_1.AddressesService])
], AddressesController);
exports.AddressesController = AddressesController;
//# sourceMappingURL=addresses.controller.js.map