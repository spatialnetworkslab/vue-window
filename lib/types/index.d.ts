import { StyleBlack, StyleWhite, StyleMetal, StyleFactory } from './style';
import Vue from 'vue';
export { WindowType, WindowResizeEvent, fixPosition } from "./window/script";
export { StyleBlack, StyleWhite, StyleMetal, StyleFactory };
declare let BASE: number;
export declare function install(vue: typeof Vue, options?: {
    prefix: string;
    zIndexBase: number;
}): void;
export { windows } from "./windows";
export { BASE };
