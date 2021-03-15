"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditVisitDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_visit_dto_1 = require("./create-visit.dto");
class EditVisitDto extends swagger_1.OmitType(create_visit_dto_1.CreateVisitDto, [
    'organizerId',
    'userIds',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EditVisitDto = EditVisitDto;
//# sourceMappingURL=edit-visit.dto.js.map