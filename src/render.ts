import * as React from 'react';
import * as ReactDOM from 'react-dom';

const appElem: HTMLElement | null = document.getElementById('app');
const rootElem: HTMLElement | null = document.getElementById('root');

export type IRenderReturn = (RCC: React.ComponentClass) => void;

export function render(MountElement: HTMLElement = (<HTMLElement>appElem), Renderer: ReactDOM.Renderer = ReactDOM.render): IRenderReturn {
  let MountNode: HTMLElement = MountElement || rootElem as HTMLElement;

  return (RCC: React.ComponentClass): void => {
    Renderer(React.createElement(RCC, null), MountNode)
  };
}

export function hydrate(MountElement?: HTMLElement): IRenderReturn {
  return render(MountElement, ReactDOM.hydrate);
}

export default render;
