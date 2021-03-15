"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const address_entity_1 = require("../dto/addresses/address.entity");
const addresses_controller_1 = require("./addresses.controller");
const addresses_service_1 = require("./addresses.service");
let AddressesModule = class AddressesModule {
};
AddressesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([address_entity_1.Address]), users_module_1.UsersModule],
        controllers: [addresses_controller_1.AddressesController],
        providers: [addresses_service_1.AddressesService],
        exports: [addresses_service_1.AddressesService],
    })
], AddressesModule);
exports.AddressesModule = AddressesModule;
//# sourceMappingURL=addresses.module.js.map