"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisitDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const visit_entity_1 = require("./visit.entity");
class CreateVisitDto extends swagger_1.OmitType(visit_entity_1.Visit, [
    'id',
    'organizer',
    'users',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { organizerId: { required: true, type: () => String }, userIds: { required: true, type: () => [String] } };
    }
}
exports.CreateVisitDto = CreateVisitDto;
//# sourceMappingURL=create-visit.dto.js.map