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
const addresses_module_1 = require("./addresses/addresses.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const phones_module_1 = require("./phones/phones.module");
const organizers_module_1 = require("./organizers/organizers.module");
const visits_module_1 = require("./visits/visits.module");
const specializations_module_1 = require("./specializations/specializations.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'remotemysql.com',
                port: 3306,
                username: 'TtEhSSiGPc',
                password: 'URLyXZVVER',
                database: 'TtEhSSiGPc',
                entities: [
                    'dist/dto/users/user.entity.js',
                    'dist/dto/addresses/address.entity.js',
                    'dist/dto/phones/phone.entity.js',
                    'dist/dto/organizers/organizer.entity.js',
                    'dist/dto/visits/visit.entity.js',
                    'dist/dto/specializations/specialization.entity.js',
                ],
                synchronize: true,
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