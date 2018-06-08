"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var appElement = document.getElementById('app');
var rootElement = document.getElementById('root');
function render(MountElement, Renderer) {
    if (MountElement === void 0) { MountElement = appElement; }
    if (Renderer === void 0) { Renderer = react_dom_1.default.render; }
    var MountNode = MountElement || appElement || rootElement;
    return function (ReactComponentClass) {
        Renderer(react_1.default.createElement(ReactComponentClass, null), MountNode);
    };
}
exports.render = render;
function hydrate(MountElement, Renderer) {
    if (Renderer === void 0) { Renderer = react_dom_1.default.hydrate; }
    return render(MountElement, Renderer);
}
exports.hydrate = hydrate;
exports.default = render;
