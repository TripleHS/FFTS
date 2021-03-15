"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
class CreateUserDto extends swagger_1.OmitType(user_entity_1.User, [
    'id',
    'addresses',
    'phones',
    'organizers',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map