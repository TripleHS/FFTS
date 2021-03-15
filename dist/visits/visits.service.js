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
exports.VisitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../dto/users/user.entity");
const create_visit_dto_1 = require("../dto/visits/create-visit.dto");
const edit_visit_dto_1 = require("../dto/visits/edit-visit.dto");
const visit_builder_1 = require("../dto/visits/visit-builder");
const visit_entity_1 = require("../dto/visits/visit.entity");
const organizers_service_1 = require("../organizers/organizers.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let VisitsService = class VisitsService {
    constructor(visitsRepository, usersService, organizersService) {
        this.visitsRepository = visitsRepository;
        this.usersService = usersService;
        this.organizersService = organizersService;
    }
    getAll() {
        return this.visitsRepository.find();
    }
    getOne(id) {
        return this.visitsRepository.findOne(id);
    }
    getAllByOrganizerId(organizerId) {
        return this.visitsRepository.find({
            where: {
                organizer: organizerId,
            },
        });
    }
    getAllByUserId(userId) {
        return this.visitsRepository.find({
            where: {
                users: userId,
            },
        });
    }
    async getAllParticipants(visitId) {
        return (await this.getOne(visitId)).users;
    }
    async create(visitDto) {
        const users = await this.usersService.findAllById(visitDto.userIds);
        if (!users) {
            throw new Error('Cannot create visit, unknown users.');
        }
        const organizer = await this.organizersService.getOne(visitDto.organizerId);
        if (!organizer) {
            throw new Error('Cannot create visit, unknown organizer.');
        }
        const visit = new visit_builder_1.VisitBuilder()
            .visitDto(visitDto)
            .users(users)
            .organizer(organizer)
            .build();
        return this.visitsRepository.save(visit);
    }
    async delete(id) {
        await this.visitsRepository.delete(id);
    }
    async update(id, visitDto) {
        const visit = await this.getOne(id);
        if (!visit) {
            throw new Error(`Visit with id '${id}' does not exist!`);
        }
        Object.entries(visitDto).forEach(([key, value]) => (visit[key] = value));
        await this.visitsRepository.save(visit);
    }
    async addUser(visitId, userId) {
        const visit = await this.getOne(visitId);
        if (!visit) {
            throw new Error();
        }
        if (visit.users.filter(({ id }) => userId == id)) {
            const user = await this.usersService.findOne(userId);
            if (!user) {
                throw new Error();
            }
            visit.users.push(user);
            this.visitsRepository.save(visit);
        }
    }
    async removeUser(visitId, userId) {
        const visit = await this.getOne(visitId);
        if (!visit) {
            throw new Error();
        }
        const user = visit.users.filter(({ id }) => id == userId)[0];
        const userIndex = visit.users.indexOf(user);
        if (user) {
            visit.users.splice(userIndex, 1);
            this.visitsRepository.save(visit);
        }
    }
};
VisitsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(visit_entity_1.Visit)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        organizers_service_1.OrganizersService])
], VisitsService);
exports.VisitsService = VisitsService;
//# sourceMappingURL=visits.service.js.map