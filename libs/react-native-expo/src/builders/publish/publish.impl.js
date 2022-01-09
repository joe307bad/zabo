"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const path_1 = require("path");
const get_project_root_1 = require("../../utils/get-project-root");
const ensure_node_modules_symlink_1 = require("../../utils/ensure-node-modules-symlink");
const child_process_1 = require("child_process");
exports.default = architect_1.createBuilder(run);
function run(options, context) {
    return rxjs_1.from(get_project_root_1.getProjectRoot(context)).pipe(operators_1.tap((root) => ensure_node_modules_symlink_1.ensureNodeModulesSymlink(context.workspaceRoot, root)), operators_1.switchMap((root) => runCliBuild(context.workspaceRoot, root, options)), operators_1.map(() => {
        return {
            success: true,
        };
    }));
}
function runCliBuild(workspaceRoot, projectRoot, options) {
    return new Promise((resolve, reject) => {
        const cliOptions = createPublishOptions(options);
        const cp = child_process_1.fork(path_1.join(workspaceRoot, '/node_modules/expo/bin/cli.js'), [`publish`, ...cliOptions], { cwd: projectRoot });
        cp.on('error', (err) => {
            reject(err);
        });
        cp.on('exit', (code) => {
            if (code === 0) {
                resolve(code);
            }
            else {
                reject(code);
            }
        });
    });
}
function createPublishOptions(options) {
    return Object.keys(options).reduce((acc, k) => {
        if (options[k])
            acc.push(`--${k}`, options[k]);
        return acc;
    }, []);
}
//# sourceMappingURL=publish.impl.js.map