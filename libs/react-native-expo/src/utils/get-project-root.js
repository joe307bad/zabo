"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoot = void 0;
const tslib_1 = require("tslib");
function getProjectRoot(context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectMeta = yield context.getProjectMetadata(context.target.project);
        if (projectMeta.root) {
            return projectMeta.root;
        }
        else {
            context.reportStatus('Error');
            const message = `${context.target.project} does not have a sourceRoot. Please define one.`;
            context.logger.error(message);
            throw new Error(message);
        }
    });
}
exports.getProjectRoot = getProjectRoot;
//# sourceMappingURL=get-project-root.js.map