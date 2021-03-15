"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phone_entity_1 = require("../dto/phones/phone.entity");
const users_module_1 = require("../users/users.module");
const phones_controller_1 = require("./phones.controller");
const phones_service_1 = require("./phones.service");
let PhonesModule = class PhonesModule {
};
PhonesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([phone_entity_1.Phone]), users_module_1.UsersModule],
        controllers: [phones_controller_1.PhonesController],
        providers: [phones_service_1.PhonesService],
    })
], PhonesModule);
exports.PhonesModule = PhonesModule;
//# sourceMappingURL=phones.module.js.map