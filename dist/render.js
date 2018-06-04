"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var appElem = document.getElementById('app');
var rootElem = document.getElementById('root');
function render(MountElement, Renderer) {
    if (MountElement === void 0) { MountElement = appElem; }
    if (Renderer === void 0) { Renderer = ReactDOM.render; }
    var MountNode = MountElement || rootElem;
    return function (RCC) {
        Renderer(React.createElement(RCC, null), MountNode);
    };
}
exports.render = render;
function hydrate(MountElement) {
    return render(MountElement, ReactDOM.hydrate);
}
exports.hydrate = hydrate;
exports.default = render;
