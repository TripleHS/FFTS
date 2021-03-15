"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBuilder = void 0;
const create_address_dto_1 = require("./create-address.dto");
const user_entity_1 = require("../users/user.entity");
const address_entity_1 = require("./address.entity");
class AddressBuilder {
    addressDto(addressDto) {
        this.address = new address_entity_1.Address();
        Object.entries(addressDto)
            .filter(([key]) => key !== 'userId' && key !== 'addressId')
            .forEach(([key, value]) => (this.address[key] = value.trim()));
        return this;
    }
    user(user) {
        this.address.user = user;
        return this;
    }
    build() {
        return this.address;
    }
}
exports.AddressBuilder = AddressBuilder;
//# sourceMappingURL=address-builder.js.map