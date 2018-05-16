import * as React from 'react';
import * as ReactDOM from 'react-dom';
// const appElem: HTMLElement = document.querySelector('#app');
var appElem = document.getElementById('app');
// NOTE: React v1.0
// const render = (
//   Component: React.ComponentClass,
//   mountNode: HTMLElement | null = appElem
// ) => {
//   ReactDOM.render(<Component />, mountNode);
// };
// Usage
//    @render
// NOTE: Render v2.0
var render = function (mountNode) {
    if (mountNode === void 0) { mountNode = appElem; }
    return function (Component) {
        ReactDOM.render(React.createElement(Component, null), mountNode);
    };
};
var hydrate = function (mountNode) {
    if (mountNode === void 0) { mountNode = appElem; }
    return function (Component) {
        ReactDOM.hydrate(React.createElement(Component, null), mountNode);
    };
};
export { render as default, render, hydrate };
