import { JsonObject } from '@angular-devkit/core';
export interface ReactNativeRunIOsOptions extends JsonObject {
    configuration: string;
    port: number;
    scheme: string;
    simulator: string;
    device: string;
}
export interface ReactNativeRunIOsOutput {
    success: boolean;
}
declare const _default: import("@angular-devkit/architect/src/internal").Builder<ReactNativeRunIOsOptions>;
export default _default;
