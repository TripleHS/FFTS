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
exports.PhonesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const create_phone_dto_1 = require("../dto/phones/create-phone.dto");
const phone_entity_1 = require("../dto/phones/phone.entity");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let PhonesService = class PhonesService {
    constructor(phoneRepository, usersService) {
        this.phoneRepository = phoneRepository;
        this.usersService = usersService;
    }
    findAll() {
        return this.phoneRepository.find();
    }
    findOne(id) {
        return this.phoneRepository.findOne(id);
    }
    findByUserId(userId) {
        return this.phoneRepository.find({
            where: {
                user: userId,
            },
        });
    }
    async create(phoneDto) {
        const user = await this.usersService.findOne(phoneDto.userId);
        if (!user) {
            throw new common_1.HttpException(`User with id ${phoneDto.userId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const phone = new phone_entity_1.Phone();
        phone.phoneNumber = phoneDto.phoneNumber;
        phone.phoneType = phoneDto.phoneType;
        phone.user = user;
        return this.phoneRepository.save(phone);
    }
    async remove(id) {
        await this.phoneRepository.delete(id);
    }
};
PhonesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(phone_entity_1.Phone)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PhonesService);
exports.PhonesService = PhonesService;
//# sourceMappingURL=phones.service.js.map