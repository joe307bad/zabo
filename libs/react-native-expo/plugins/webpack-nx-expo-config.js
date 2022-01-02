"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackConfigNxExpo = void 0;
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const babelLoaderRules = {
    test: /\.tsx?$/,
    loader: 'babel-loader',
    options: {
        presets: ['babel-preset-expo'],
    },
};
exports.WebpackConfigNxExpo = (prevConfig) => {
    var _a, _b;
    const oldPlugins = ((_a = prevConfig === null || prevConfig === void 0 ? void 0 : prevConfig.resolve) === null || _a === void 0 ? void 0 : _a.plugins) || [];
    const oldRules = ((_b = prevConfig === null || prevConfig === void 0 ? void 0 : prevConfig.module) === null || _b === void 0 ? void 0 : _b.rules) || [];
    prevConfig.resolve = Object.assign(Object.assign({}, prevConfig.resolve), {});
    prevConfig.module.rules = [...oldRules, babelLoaderRules];
    return prevConfig;
};
//# sourceMappingURL=webpack-nx-expo-config.js.map
