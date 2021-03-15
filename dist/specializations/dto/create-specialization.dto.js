"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecializationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const specialization_entity_1 = require("../entities/specialization.entity");
class CreateSpecializationDto extends swagger_1.OmitType(specialization_entity_1.Specialization, [
    'id',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateSpecializationDto = CreateSpecializationDto;
//# sourceMappingURL=create-specialization.dto.js.map