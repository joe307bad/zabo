"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = exports.callRule = exports.runSchematic = void 0;
const path_1 = require("path");
const testing_1 = require("@angular-devkit/schematics/testing");
const devkit_1 = require("@nrwl/devkit");
const workspace_1 = require("@nrwl/workspace/src/utils/workspace");
const testRunner = new testing_1.SchematicTestRunner('@nrwl/react-native', path_1.join(__dirname, '../../collection.json'));
function runSchematic(schematicName, options, tree) {
    return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}
exports.runSchematic = runSchematic;
function callRule(rule, tree) {
    return testRunner.callRule(rule, tree).toPromise();
}
exports.callRule = callRule;
function createApp(tree, appName) {
    const { fileName } = devkit_1.names(appName);
    return callRule(workspace_1.updateWorkspace((workspace) => {
        workspace.projects.add({
            name: fileName,
            root: `apps/${fileName}`,
            projectType: 'application',
            sourceRoot: `apps/${fileName}/src`,
            targets: {},
        });
    }), tree);
}
exports.createApp = createApp;
//# sourceMappingURL=testing.js.map