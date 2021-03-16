"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const address_entity_1 = require("./dto/addresses/address.entity");
const addresses_module_1 = require("./addresses/addresses.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./dto/users/user.entity");
const users_module_1 = require("./users/users.module");
const phones_module_1 = require("./phones/phones.module");
const phone_entity_1 = require("./dto/phones/phone.entity");
const organizer_entity_1 = require("./dto/organizers/organizer.entity");
const organizers_module_1 = require("./organizers/organizers.module");
const visit_entity_1 = require("./dto/visits/visit.entity");
const visits_module_1 = require("./visits/visits.module");
const specializations_module_1 = require("./specializations/specializations.module");
const specialization_entity_1 = require("./specializations/entities/specialization.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'ec2-54-155-35-88.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'tuoqbrkotjtfgm',
                password: 'fa5a7c7a2183527e1384d14b1b5853b3e313ebf065329486e43d75e3b25ae449',
                database: 'd3e43odpu1ht8q',
                synchronize: true,
                logging: false,
                entities: [user_entity_1.User, address_entity_1.Address, phone_entity_1.Phone, organizer_entity_1.Organizer, visit_entity_1.Visit, specialization_entity_1.Specialization],
                ssl: true,
            }),
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            phones_module_1.PhonesModule,
            organizers_module_1.OrganizersModule,
            visits_module_1.VisitsModule,
            specializations_module_1.SpecializationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map