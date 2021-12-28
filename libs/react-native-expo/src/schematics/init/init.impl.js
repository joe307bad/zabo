"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependencies = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const versions_1 = require("../../utils/versions");
const ignore_1 = require("ignore");
function default_1(schema) {
    return schematics_1.chain([
        setWorkspaceDefaults(),
        workspace_1.addPackageWithInit('@nrwl/jest'),
        addDependencies(),
        updateGitIgnore(schema.appProjectRoot),
        moveDependency(),
    ]);
}
exports.default = default_1;
function addDependencies() {
    return workspace_1.addDepsToPackageJson({
        expo: versions_1.expoVersion,
        'expo-status-bar': versions_1.expoStatusBarVersion,
        'react-dom': versions_1.reactDomVersion,
        react: versions_1.reactVersion,
        'react-native': versions_1.reactNativeVersion,
        'react-native-web': versions_1.reactNativeWebVersion,
    }, {
        '@nrwl/react': versions_1.nxVersion,
        '@types/react': versions_1.typesReactVersion,
        '@types/react-native': versions_1.typesReactNativeVersion,
        '@types/react-dom': versions_1.typesReactDomVersion,
        'expo-cli': versions_1.expoCliVersion,
        '@testing-library/react-native': versions_1.testingLibraryReactNativeVersion,
        '@testing-library/jest-native': versions_1.testingLibraryJestNativeVersion,
        'jest-react-native': versions_1.jestReactNativeVersion,
        'react-test-renderer': versions_1.reactTestRendererVersion,
        '@types/react-test-renderer': versions_1.reactTestRendererTypesVersion,
        'tsconfig-paths-webpack-plugin': versions_1.tsconfigPathWebpackPluginVersion,
        '@expo/webpack-config': versions_1.expoWebpackConfigVersion,
    });
}
exports.addDependencies = addDependencies;
function moveDependency() {
    return workspace_1.updateJsonInTree('package.json', (json) => {
        json.dependencies = json.dependencies || {};
        delete json.dependencies['@nrwl/react'];
        return json;
    });
}
function setWorkspaceDefaults() {
    return workspace_1.updateWorkspace((workspace) => {
        workspace.extensions.cli = workspace.extensions.cli || {};
        const defaultCollection = workspace.extensions.cli &&
            workspace.extensions.cli.defaultCollection;
        if (!defaultCollection) {
            workspace.extensions.cli.defaultCollection =
                'nx-react-native-expo';
        }
    });
}
function updateGitIgnore(appProjectRoot) {
    return (host) => {
        if (!host.exists('.gitignore')) {
            return;
        }
        const ig = ignore_1.default();
        ig.add(host.read('.gitignore').toString());
        let updateContent = `${appProjectRoot}/node_modules\n`;
        if (!ig.ignores(`.expo-assets/example.json`)) {
            updateContent = `.expo*\nnpm-debug.*\n*.jks\n*.p8\n*.p12\n*.key\n*.mobileprovision\n*.orig.*\nweb-build/\n${updateContent}`;
        }
        const content = `${host
            .read('.gitignore')
            .toString('utf-8')
            .trimRight()}\n${updateContent}`;
        host.overwrite('.gitignore', content);
    };
}
//# sourceMappingURL=init.impl.js.map