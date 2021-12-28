"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureNodeModulesSymlink = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const workspace_1 = require("@nrwl/workspace");
const os_1 = require("os");
const chalk = require("chalk");
function ensureNodeModulesSymlink(workspaceRoot, projectRoot) {
    const symlinkType = os_1.platform() === 'win32' ? 'junction' : 'dir';
    const packageJsonAppPath = path_1.join(projectRoot, 'package.json');
    const rootPackageJsonAppPath = path_1.join(workspaceRoot, 'package.json');
    const appNodeModulesPath = path_1.join(projectRoot, 'node_modules');
    const rootDependency = getPackageJsonDependency(rootPackageJsonAppPath);
    if (!fs_1.existsSync(appNodeModulesPath)) {
        workspace_1.createDirectory(appNodeModulesPath);
    }
    for (const { name: moduleName, version: moduleVersion, } of getProjectSymlynkDependency(packageJsonAppPath)) {
        const modulePath = path_1.join(workspaceRoot, 'node_modules', moduleName);
        const moduleToPath = path_1.join(appNodeModulesPath, moduleName);
        // Handle scoped package
        if (isScopedPackage(moduleName)) {
            const { scope, name } = getScopedData(moduleName);
            // Check version for expo cli
            stopIfIsExpoScopedPackageWithVersionStar(scope, name, moduleVersion, rootDependency[moduleName]);
            const scopePath = path_1.join(appNodeModulesPath, scope);
            // If not exists create scoped directory
            if (!fs_1.existsSync(scopePath)) {
                workspace_1.createDirectory(scopePath);
            }
        }
        // If the path not exists create symlink
        if (!fs_1.existsSync(moduleToPath)) {
            fs_1.symlinkSync(modulePath, moduleToPath, symlinkType);
        }
    }
}
exports.ensureNodeModulesSymlink = ensureNodeModulesSymlink;
function getPackageJsonDependency(packageJsonPath) {
    const packageJsonContent = JSON.parse(fs_1.readFileSync(packageJsonPath, { encoding: 'utf8' }).toString());
    return packageJsonContent.dependencies || {};
}
function getProjectSymlynkDependency(packageJsonPath) {
    const dependencies = getPackageJsonDependency(packageJsonPath);
    return Object.keys(dependencies).map((depName) => ({
        name: depName,
        version: dependencies[depName],
    }));
}
function isScopedPackage(moduleName) {
    return moduleName.startsWith('@');
}
function getScopedData(moduleName) {
    const [scope, name] = moduleName.split('/');
    return { scope, name };
}
/**
 * A word here is needed
 * This function is here becase of expo cli and how it handles dependencies
 * In short, you can't use the wildcard character '*' as version number
 * this is why this cli is handling this case, moreover it's hepling keeping consistance
 * between the version inside your root package.json and the application one, for all the "@expo" libraryes
 */
function stopIfIsExpoScopedPackageWithVersionStar(scope, name, version, basePackageVersion) {
    if (scope.startsWith('@expo')) {
        if (version === '*') {
            throw new Error(`Invalid version for @expo scoped package ${scope}/${name}. Change "${chalk.red(`${scope}/${name}`)}": "*" --> "${chalk.blue(`${scope}/${name}": "${basePackageVersion}`)}" Inside your application's package.json`);
        }
        else if (version !== basePackageVersion) {
            console.log(chalk.yellow(`Inside the package.json of your application the package ${scope}/${name} use version ${version} should be using ${basePackageVersion} as in your base package.json`));
        }
    }
}
//# sourceMappingURL=ensure-node-modules-symlink.js.map