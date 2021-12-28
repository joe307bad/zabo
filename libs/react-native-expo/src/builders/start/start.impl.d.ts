import { JsonObject } from '@angular-devkit/core';
export interface ReactNativeDevServerOptions extends JsonObject {
    host: string;
    port: number;
}
export interface ReactNativeDevServerBuildOutput {
    baseUrl: string;
    success: boolean;
}
declare const _default: import("@angular-devkit/architect/src/internal").Builder<ReactNativeDevServerOptions>;
export default _default;
