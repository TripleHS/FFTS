"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditOrganizerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_organizer_dto_1 = require("./create-organizer.dto");
class EditOrganizerDto extends swagger_1.OmitType(create_organizer_dto_1.CreateOrganizerDto, [
    'userId',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditOrganizerDto = EditOrganizerDto;
//# sourceMappingURL=edit-organizer.dto.js.map