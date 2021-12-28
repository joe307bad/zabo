"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNxMetro = void 0;
const app_root_1 = require("@nrwl/workspace/src/utils/app-root");
const path_1 = require("path");
const metro_resolver_1 = require("./metro-resolver");
const file_utils_1 = require("@nrwl/workspace/src/core/file-utils");
const defaults_1 = require("metro-config/src/defaults/defaults");
function withNxMetro(config) {
    const watchFolders = config.watchFolders || [];
    const resolver = config.resolver || {};
    const transformer = config.transformer || {};
    config.watchFolders = watchFolders.concat([
        path_1.join(app_root_1.appRootPath, 'node_modules'),
        path_1.join(app_root_1.appRootPath, file_utils_1.workspaceLayout().libsDir),
    ]);
    config.resolver = Object.assign(Object.assign({}, resolver), { assetExts: [...defaults_1.assetExts, 'db'], resolveRequest: metro_resolver_1.resolveRequest });
    config.transformer = Object.assign(Object.assign({}, transformer), { enableBabelRCLookup: false });
    return config;
}
exports.withNxMetro = withNxMetro;
//# sourceMappingURL=with-nx-metro.js.map