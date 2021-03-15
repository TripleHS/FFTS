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
exports.OrganizersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_organizer_dto_1 = require("../dto/organizers/create-organizer.dto");
const edit_organizer_dto_1 = require("../dto/organizers/edit-organizer.dto");
const organizer_validation_1 = require("./organizer-validation");
const organizers_service_1 = require("./organizers.service");
let OrganizersController = class OrganizersController {
    constructor(organizersService) {
        this.organizersService = organizersService;
    }
    getAll() {
        return this.organizersService.getAll();
    }
    getOne(id) {
        return this.organizersService.getOne(id);
    }
    getAllByUserId(userId) {
        return this.organizersService.getAllByUserId(userId);
    }
    getAllOrganizersByAddressId(addressId) {
        return this.organizersService.getAllByAddressId(addressId);
    }
    create(organizerDto) {
        const organizer = organizer_validation_1.OrganizerCreationValidation.validate(organizerDto);
        if (organizer.error) {
            return organizer.error;
        }
        return this.organizersService.create(organizerDto);
    }
    delete(id) {
        return this.organizersService.delete(id);
    }
    update(id, organizerDto) {
        const organizer = organizer_validation_1.OrganizerEditionValidation.validate(organizerDto);
        if (organizer.error) {
            return organizer.error;
        }
        return this.organizersService.edit(id, organizerDto);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../dto/organizers/organizer.entity").Organizer] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/organizers/organizer.entity").Organizer }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "getOne", null);
__decorate([
    common_1.Get('user/:id'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/organizers/organizer.entity").Organizer] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "getAllByUserId", null);
__decorate([
    common_1.Get('address/:id'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/organizers/organizer.entity").Organizer] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "getAllOrganizersByAddressId", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organizer_dto_1.CreateOrganizerDto]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "delete", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_organizer_dto_1.EditOrganizerDto]),
    __metadata("design:returntype", void 0)
], OrganizersController.prototype, "update", null);
OrganizersController = __decorate([
    common_1.Controller('organizers'),
    __metadata("design:paramtypes", [organizers_service_1.OrganizersService])
], OrganizersController);
exports.OrganizersController = OrganizersController;
//# sourceMappingURL=organizers.controller.js.map