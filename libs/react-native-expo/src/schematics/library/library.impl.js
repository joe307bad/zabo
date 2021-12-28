"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function default_1(options) {
    return schematics_1.chain([
        schematics_1.externalSchematic('@nrwl/react', 'library', Object.assign(Object.assign({}, options), { component: false, style: 'none' })),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=library.impl.js.map