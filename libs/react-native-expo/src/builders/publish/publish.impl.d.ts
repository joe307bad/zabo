import { JsonObject } from '@angular-devkit/core';
export interface ReactNativePublishOptions extends JsonObject {
    plreleaseChannel: string;
    maxWorkers: number;
}
export interface ReactNativePublishOutput {
    success: boolean;
}
declare const _default: import("@angular-devkit/architect/src/internal").Builder<ReactNativePublishOptions>;
export default _default;
