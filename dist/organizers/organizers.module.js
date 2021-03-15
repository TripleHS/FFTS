"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizersModule = void 0;
const common_1 = require("@nestjs/common");
const organizers_service_1 = require("./organizers.service");
const organizers_controller_1 = require("./organizers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const organizer_entity_1 = require("../dto/organizers/organizer.entity");
const users_module_1 = require("../users/users.module");
const addresses_module_1 = require("../addresses/addresses.module");
let OrganizersModule = class OrganizersModule {
};
OrganizersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([organizer_entity_1.Organizer]),
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
        ],
        providers: [organizers_service_1.OrganizersService],
        controllers: [organizers_controller_1.OrganizersController],
        exports: [organizers_service_1.OrganizersService],
    })
], OrganizersModule);
exports.OrganizersModule = OrganizersModule;
//# sourceMappingURL=organizers.module.js.map