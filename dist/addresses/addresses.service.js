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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const create_address_dto_1 = require("../dto/addresses/create-address.dto");
const edit_address_dto_1 = require("../dto/addresses/edit-address.dto");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const address_entity_1 = require("../dto/addresses/address.entity");
const address_builder_1 = require("../dto/addresses/address-builder");
let AddressesService = class AddressesService {
    constructor(addressesRepository, usersService) {
        this.addressesRepository = addressesRepository;
        this.usersService = usersService;
    }
    findAll() {
        return this.addressesRepository.find({ relations: ['user'] });
    }
    findOne(id) {
        return this.addressesRepository.findOne(id, { relations: ['user'] });
    }
    findByUserId(userId) {
        return this.addressesRepository.find({
            where: {
                user: userId,
            },
        });
    }
    async create(addressDto) {
        const user = await this.usersService.findOne(addressDto.userId);
        if (!user) {
            throw new Error(`User with id '${addressDto.userId}' does not exist!`);
        }
        const address = new address_builder_1.AddressBuilder()
            .addressDto(addressDto)
            .user(user)
            .build();
        return this.addressesRepository.save(address);
    }
    async remove(id) {
        await this.addressesRepository.delete(id);
    }
    async edit(id, addressDto) {
        const address = await this.findOne(id);
        if (!address) {
            return;
        }
        Object.entries(addressDto).forEach(([key, value]) => (address[key] = value.trim()));
        await this.addressesRepository.save(address);
    }
};
AddressesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], AddressesService);
exports.AddressesService = AddressesService;
//# sourceMappingURL=addresses.service.js.map