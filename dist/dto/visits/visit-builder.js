"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitBuilder = void 0;
const visit_entity_1 = require("./visit.entity");
class VisitBuilder {
    constructor() {
        this.visit = new visit_entity_1.Visit();
    }
    visitDto(visitDto) {
        Object.entries(visitDto)
            .filter(([key]) => key !== 'userId' && key !== 'organizerId')
            .forEach(([key, value]) => (this.visit[key] = value instanceof String ? value.trim() : value));
        return this;
    }
    users(users) {
        this.visit.users = users;
        return this;
    }
    organizer(organizer) {
        this.visit.organizer = organizer;
        return this;
    }
    build() {
        return this.visit;
    }
}
exports.VisitBuilder = VisitBuilder;
//# sourceMappingURL=visit-builder.js.map