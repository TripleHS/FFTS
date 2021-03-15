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
exports.VisitsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_visit_dto_1 = require("../dto/visits/create-visit.dto");
const edit_visit_dto_1 = require("../dto/visits/edit-visit.dto");
const visit_validation_1 = require("./visit-validation");
const visits_service_1 = require("./visits.service");
let VisitsController = class VisitsController {
    constructor(visitsService) {
        this.visitsService = visitsService;
    }
    getAll() {
        return this.visitsService.getAll();
    }
    getOne(id) {
        return this.visitsService.getOne(id);
    }
    getAllByUserId(userId) {
        return this.visitsService.getAllByUserId(userId);
    }
    getAllByOrganizerId(organizerId) {
        return this.visitsService.getAllByOrganizerId(organizerId);
    }
    getAllUsersFromVisit(visitId) {
        return this.visitsService.getAllParticipants(visitId);
    }
    createNewVisit(visitDto) {
        const visit = visit_validation_1.VisitCreationValidation.validate(visitDto);
        if (visit.error) {
            return visit.error;
        }
        return this.visitsService.create(visitDto);
    }
    addUserToVisit(visitId, userId) {
        return this.visitsService.addUser(visitId, userId);
    }
    removeUserFromVisit(visitId, userId) {
        return this.visitsService.removeUser(visitId, userId);
    }
    removeVisit(visitId) {
        return this.visitsService.delete(visitId);
    }
    updateVisit(visitId, visitDto) {
        const visit = visit_validation_1.VisitEditionValidation.validate(visitDto);
        if (visit.error) {
            return visit.error;
        }
        return this.visitsService.update(visitId, visitDto);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../dto/visits/visit.entity").Visit] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/visits/visit.entity").Visit }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getOne", null);
__decorate([
    common_1.Get('user/:id'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/visits/visit.entity").Visit] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getAllByUserId", null);
__decorate([
    common_1.Get('organizer/:id'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/visits/visit.entity").Visit] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getAllByOrganizerId", null);
__decorate([
    common_1.Get(':id/users'),
    openapi.ApiResponse({ status: 200, type: [require("../dto/users/user.entity").User] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getAllUsersFromVisit", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visit_dto_1.CreateVisitDto]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "createNewVisit", null);
__decorate([
    common_1.Post(':id/users/:uid'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "addUserToVisit", null);
__decorate([
    common_1.Delete(':id/users/:uid'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "removeUserFromVisit", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "removeVisit", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_visit_dto_1.EditVisitDto]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "updateVisit", null);
VisitsController = __decorate([
    common_1.Controller('visits'),
    __metadata("design:paramtypes", [visits_service_1.VisitsService])
], VisitsController);
exports.VisitsController = VisitsController;
//# sourceMappingURL=visits.controller.js.map