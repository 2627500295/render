import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const appElem: HTMLElement = document.querySelector('#app');
const appElem: HTMLElement | null = document.getElementById('app');

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
const render: Function = (
  mountNode: HTMLElement | null = appElem
): Function => {
  return (Component: React.ComponentClass): void => {
    ReactDOM.render(<Component />, mountNode);
  };
};

const hydrate: Function = (
  mountNode: HTMLElement | null = appElem
): Function => {
  return (Component: React.ComponentClass): void => {
    ReactDOM.hydrate(<Component />, mountNode);
  };
};

export { render as default, render, hydrate };
