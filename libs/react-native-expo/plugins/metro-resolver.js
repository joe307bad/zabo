"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRequest = void 0;
const tslib_1 = require("tslib");
const metroResolver = require("metro-resolver");
const tsconfig_paths_1 = require("tsconfig-paths");
const path_1 = require("path");
function resolveRequest(_context, moduleName, platform) {
    const { resolveRequest } = _context, context = tslib_1.__rest(_context, ["resolveRequest"]);
    try {
        return metroResolver.resolve(context, moduleName, platform);
    }
    catch (_a) {
        // ignore
    }
    const matcher = getMatcher();
    const match = matcher(moduleName);
    if (match) {
        return {
            type: 'sourceFile',
            filePath: match,
        };
    }
    else {
        // Resolve as a normal asset
        const parsedPath = path_1.parse(context.originModulePath);
        const filePath = path_1.join(parsedPath.dir, moduleName);
        return {
            type: 'sourceFile',
            filePath,
        };
    }
}
exports.resolveRequest = resolveRequest;
let matcher;
function getMatcher() {
    if (!matcher) {
        const result = tsconfig_paths_1.loadConfig();
        if (result.resultType === 'success') {
            const { absoluteBaseUrl, paths } = result;
            matcher = tsconfig_paths_1.createMatchPath(absoluteBaseUrl, paths);
        }
        else {
            throw new Error(`Could not load tsconfig for project`);
        }
    }
    return matcher;
}
//# sourceMappingURL=metro-resolver.js.map