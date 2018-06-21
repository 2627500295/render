"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
// 常量
var appElement = document.getElementById('app');
var rootElement = document.getElementById('root');
/**
 * 创建挂载元素
 * 创建一个供 React.render 挂载用 DOM 元素
 *
 * @returns 挂载元素
 */
function createMountElement() {
    var MountElem = document.getElementById('appMount');
    if (MountElem === undefined || MountElem === null) {
        MountElem = document.createElement('div');
        MountElem.setAttribute('id', 'appMount');
        document.body.insertBefore(MountElem, document.body.childNodes[0]);
    }
    return MountElem;
}
/**
 * 获取挂载元素
 *
 * @param MountElem 挂载元素
 * @returns 挂载元素
 */
function getMountElement(MountElem) {
    if (MountElem === void 0) { MountElem = appElement; }
    if (MountElem === undefined || MountElem === null) {
        if (rootElement !== undefined && rootElement !== null) {
            return rootElement;
        }
        return createMountElement();
    }
    return MountElem;
}
/**
 * Render
 *
 * @param MountElement 挂载元素
 * @param Renderer 渲染方式
 * @returns 渲染组件函数
 */
function render(MountElement, Renderer) {
    if (MountElement === void 0) { MountElement = appElement; }
    if (Renderer === void 0) { Renderer = react_dom_1.default.render; }
    return function (ReactComponentClass) {
        Renderer(react_1.default.createElement(ReactComponentClass, null), getMountElement(MountElement));
    };
}
exports.render = render;
/**
 * Hydrate
 *
 * @param MountElement 挂载元素
 * @param Renderer 渲染方式
 * @returns 渲染组件函数
 */
function hydrate(MountElement, Renderer) {
    if (Renderer === void 0) { Renderer = react_dom_1.default.hydrate; }
    return render(MountElement, Renderer);
}
exports.hydrate = hydrate;
exports.default = render;
