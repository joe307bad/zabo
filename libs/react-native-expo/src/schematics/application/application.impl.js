"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const ast_utils_1 = require("@nrwl/workspace/src/utils/ast-utils");
const to_js_1 = require("@nrwl/workspace/src/utils/rules/to-js");
const init_impl_1 = require("../init/init.impl");
const react_1 = require("@nrwl/react");
function default_1(schema) {
    return (host, context) => {
        const options = normalizeOptions(host, schema);
        return schematics_1.chain([
            init_impl_1.default({
                skipFormat: true,
                appProjectRoot: options.appProjectRoot,
            }),
            workspace_1.addLintFiles(options.appProjectRoot, "eslint" /* EsLint */, {
                localConfig: react_1.reactEslintJson,
                extraPackageDeps: react_1.extraEslintDependencies,
            }),
            createApplicationFiles(options),
            updateNxJson(options),
            addProject(options),
            addJest(options),
            workspace_1.formatFiles(options),
        ]);
    };
}
exports.default = default_1;
function createApplicationFiles(options) {
    const data = Object.assign(Object.assign(Object.assign({}, workspace_1.names(options.name)), options), { offsetFromRoot: workspace_1.offsetFromRoot(options.appProjectRoot) });
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url(`./files/expo`), [
        schematics_1.pathTemplate(data),
        schematics_1.applyTemplates(data),
        schematics_1.move(options.appProjectRoot),
        options.js ? to_js_1.toJS() : schematics_1.noop(),
    ]));
}
function updateNxJson(options) {
    return workspace_1.updateJsonInTree('workspace.json', (json) => {
        const parsedTags = options.tags
            ? options.tags.split(',').map((s) => s.trim())
            : [];
        json.projects[options.projectName] = { tags: parsedTags };
        return json;
    });
}
function addProject(options) {
    return ast_utils_1.updateWorkspaceInTree((json) => {
        const architect = {};
        architect.bundle = {
            builder: 'nx-react-native-expo:bundle',
            options: {},
        };
        architect.start = {
            builder: 'nx-react-native-expo:start',
            options: {},
        };
        architect['run-ios'] = {
            builder: 'nx-react-native-expo:run-ios',
            options: {},
        };
        architect['run-android'] = {
            builder: 'nx-react-native-expo:run-android',
            options: {},
        };
        architect['run-web'] = {
            builder: 'nx-react-native-expo:run-web',
            options: {},
        };
        architect['publish'] = {
            builder: 'nx-react-native-expo:publish',
            options: {},
        };
        architect.lint = workspace_1.generateProjectLint(core_1.normalize(options.appProjectRoot), core_1.join(core_1.normalize(options.appProjectRoot), 'tsconfig.json'), "eslint" /* EsLint */, [`${options.appProjectRoot}/**/*.{js,ts,tsx}`]);
        json.projects[options.projectName] = {
            root: options.appProjectRoot,
            sourceRoot: core_1.join(options.appProjectRoot, 'src'),
            projectType: 'application',
            schematics: {},
            architect,
        };
        json.defaultProject = json.defaultProject || options.projectName;
        return json;
    });
}
function addJest(options) {
    return options.unitTestRunner === 'jest'
        ? schematics_1.externalSchematic('@nrwl/jest', 'jest-project', {
            project: options.projectName,
            supportTsx: true,
            skipSerializers: true,
            setupFile: 'none',
        })
        : schematics_1.noop();
}
function normalizeOptions(host, options) {
    const appDirectory = options.directory
        ? `${workspace_1.toFileName(options.directory)}/${workspace_1.toFileName(options.name)}`
        : workspace_1.toFileName(options.name);
    const appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    const appProjectRoot = core_1.normalize(`apps/${appDirectory}`);
    const className = workspace_1.toClassName(options.name);
    return Object.assign(Object.assign({}, options), { className, lowerCaseName: className.toLowerCase(), name: workspace_1.toFileName(options.name), projectName: appProjectName, appProjectRoot });
}
//# sourceMappingURL=application.impl.js.map