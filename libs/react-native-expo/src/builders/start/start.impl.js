"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const get_project_root_1 = require("../../utils/get-project-root");
const child_process_1 = require("child_process");
const path_1 = require("path");
const ensure_node_modules_symlink_1 = require("../../utils/ensure-node-modules-symlink");
exports.default = architect_1.createBuilder(run);
function run(options, context) {
    return rxjs_1.from(get_project_root_1.getProjectRoot(context)).pipe(operators_1.tap((root) => ensure_node_modules_symlink_1.ensureNodeModulesSymlink(context.workspaceRoot, root)), operators_1.switchMap((root) => rxjs_1.from(runCliStart(context.workspaceRoot, root, options))), operators_1.catchError((err) => {
        console.error(err);
        return rxjs_1.throwError(err);
    }), operators_1.switchMap(() => new rxjs_1.Observable((obs) => {
        obs.next({
            baseUrl: `http://${options.host}:${options.port}`,
            success: true,
        });
    })));
}
function runCliStart(workspaceRoot, projectRoot, options) {
    return new Promise((resolve, reject) => {
        const cp = child_process_1.fork(path_1.join(workspaceRoot, '/node_modules/expo/bin/cli.js'), ['start', ...createStartOptions(options)], { cwd: projectRoot });
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
function createStartOptions(options) {
    return Object.keys(options).reduce((acc, k) => {
        if (options[k])
            acc.push(`--${k}`, options[k]);
        return acc;
    }, []);
}
//# sourceMappingURL=start.impl.js.map