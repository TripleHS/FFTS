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
exports.OrganizersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const addresses_service_1 = require("../addresses/addresses.service");
const address_entity_1 = require("../dto/addresses/address.entity");
const create_organizer_dto_1 = require("../dto/organizers/create-organizer.dto");
const edit_organizer_dto_1 = require("../dto/organizers/edit-organizer.dto");
const organizer_entity_1 = require("../dto/organizers/organizer.entity");
const organzier_builder_1 = require("../dto/organizers/organzier-builder");
const user_entity_1 = require("../dto/users/user.entity");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let OrganizersService = class OrganizersService {
    constructor(organizersRepository, usersService, addressesService) {
        this.organizersRepository = organizersRepository;
        this.usersService = usersService;
        this.addressesService = addressesService;
    }
    getAll() {
        return this.organizersRepository.find({ relations: ['user', 'address'] });
    }
    getOne(id) {
        return this.organizersRepository.findOne(id, {
            relations: ['user', 'address'],
        });
    }
    getAllByUserId(userId) {
        return this.organizersRepository.find({
            where: { user: userId },
            relations: ['address'],
        });
    }
    getAllByAddressId(addressId) {
        return this.organizersRepository.find({
            where: { address: addressId },
            relations: ['user'],
        });
    }
    async create(organizerDto) {
        const user = await this.usersService.findOne(organizerDto.userId);
        if (!user) {
            throw new Error(`User with id '${organizerDto.userId}' does not exist!`);
        }
        const address = await this.addressesService.findOne(organizerDto.addressId);
        if (!address) {
            throw new Error(`Address with id '${organizerDto.addressId}' does not exist!`);
        }
        this.addressRegistered(user, address);
        const organizer = new organzier_builder_1.OrganizerBuilder()
            .organizerDto(organizerDto)
            .user(user)
            .address(address)
            .build();
        return this.organizersRepository.save(organizer);
    }
    async addressRegistered(user, address) {
        if (!user.addresses.filter(({ id }) => id == address.id)) {
            throw new Error(`Can't change address, desired address not registered to user!`);
        }
    }
    async delete(id) {
        await this.organizersRepository.delete(id);
    }
    async edit(id, organizerDto) {
        const organizer = await this.getOne(id);
        if (!organizer) {
            throw new Error(`Organizer with id '${id}' does not exist!`);
        }
        Object.entries(organizerDto).forEach(async ([key, value]) => key === 'addressId'
            ? (organizer[key] = await this.changeAddress(organizer, value))
            : (organizer[key] = value));
        await this.organizersRepository.save(organizer);
    }
    async changeAddress(organizer, addressId) {
        const address = await this.addressesService.findOne(addressId);
        const user = await this.usersService.findOne(organizer.user.id);
        await this.addressRegistered(user, address);
        organizer.address = address;
    }
};
OrganizersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(organizer_entity_1.Organizer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        addresses_service_1.AddressesService])
], OrganizersService);
exports.OrganizersService = OrganizersService;
//# sourceMappingURL=organizers.service.js.map