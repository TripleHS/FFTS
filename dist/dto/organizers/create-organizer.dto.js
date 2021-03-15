"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const organizer_entity_1 = require("./organizer.entity");
class CreateOrganizerDto extends swagger_1.OmitType(organizer_entity_1.Organizer, [
    'id',
    'user',
    'address',
    'visits',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String }, addressId: { required: true, type: () => String } };
    }
}
exports.CreateOrganizerDto = CreateOrganizerDto;
//# sourceMappingURL=create-organizer.dto.js.map