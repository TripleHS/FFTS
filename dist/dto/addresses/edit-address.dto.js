"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAddressDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_address_dto_1 = require("./create-address.dto");
class EditAddressDto extends swagger_1.OmitType(create_address_dto_1.CreateAddressDto, [
    'userId',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { organizerIds: { required: true, type: () => [String] } };
    }
}
exports.EditAddressDto = EditAddressDto;
//# sourceMappingURL=edit-address.dto.js.map