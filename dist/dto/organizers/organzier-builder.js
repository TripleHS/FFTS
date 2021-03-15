"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerBuilder = void 0;
const organizer_entity_1 = require("./organizer.entity");
class OrganizerBuilder {
    constructor() {
        this.organizer = new organizer_entity_1.Organizer();
    }
    organizerDto(organizerDto) {
        this.organizer.title = organizerDto.title;
        return this;
    }
    user(user) {
        this.organizer.user = user;
        return this;
    }
    address(address) {
        this.organizer.address = address;
        return this;
    }
    build() {
        return this.organizer;
    }
}
exports.OrganizerBuilder = OrganizerBuilder;
//# sourceMappingURL=organzier-builder.js.map