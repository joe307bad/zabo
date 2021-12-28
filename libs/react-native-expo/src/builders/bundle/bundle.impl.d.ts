import { JsonObject } from '@angular-devkit/core';
export interface ReactNativeBuildOptions extends JsonObject {
    dev: boolean;
    platform: string;
    entryFile: string;
    outputPath: string;
    maxWorkers: number;
    sourceMap: boolean;
}
export interface ReactNativeBuildOutput {
    success: boolean;
}
declare const _default: import("@angular-devkit/architect/src/internal").Builder<ReactNativeBuildOptions>;
export default _default;
