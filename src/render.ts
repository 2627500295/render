import React from 'react';
import ReactDOM from 'react-dom';

const appElement: HTMLElement | null = document.getElementById('app');
const rootElement: HTMLElement | null = document.getElementById('root');

export type IRenderReturn = (ReactComponentClass: React.ComponentClass) => void;

export function render(
  MountElement: HTMLElement | null = appElement,
  Renderer: ReactDOM.Renderer = ReactDOM.render
): IRenderReturn {
  const MountNode: HTMLElement | null = MountElement || rootElement;

  return (ReactComponentClass: React.ComponentClass): void => {
    Renderer(
      React.createElement(ReactComponentClass, null),
      MountNode
    );
  };
}

export function hydrate(MountElement?: HTMLElement | null): IRenderReturn {
  return render(MountElement, ReactDOM.hydrate);
}

export { render as default };
