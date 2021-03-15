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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const create_user_dto_1 = require("../dto/users/create-user.dto");
const user_entity_1 = require("../dto/users/user.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find({
            relations: ['addresses', 'organizers'],
        });
    }
    findAllById(userIds) {
        return this.usersRepository.find({
            where: {
                id: typeorm_2.In(userIds),
            },
        });
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne(id, {
            relations: ['addresses', 'organizers'],
        });
        if (!user) {
            throw new common_1.HttpException(`User with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    create(createUserDto) {
        return this.usersRepository.save(createUserDto);
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map