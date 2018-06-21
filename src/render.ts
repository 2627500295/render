import React from 'react';
import ReactDOM from 'react-dom';

// 类型定义
export type IRenderReturn = (ReactComponentClass: React.ComponentClass) => void;

// 常量
const appElement: HTMLElement | null = document.getElementById('app');
const rootElement: HTMLElement | null = document.getElementById('root');

/**
 * 创建挂载元素
 * 创建一个供 React.render 挂载用 DOM 元素
 *
 * @returns 挂载元素
 */
function createMountElement(): HTMLElement {
  let MountElem: HTMLElement | null = document.getElementById('appMount');

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
function getMountElement(MountElem: HTMLElement | null = appElement): HTMLElement {
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
export function render(
  MountElement: HTMLElement | null = appElement,
  Renderer: ReactDOM.Renderer = ReactDOM.render
): IRenderReturn {
  return (ReactComponentClass: React.ComponentClass): void => {
    Renderer(
      React.createElement(ReactComponentClass, null),
      getMountElement(MountElement)
    );
  };
}

/**
 * Hydrate
 *
 * @param MountElement 挂载元素
 * @param Renderer 渲染方式
 * @returns 渲染组件函数
 */
export function hydrate(
  MountElement?: HTMLElement | null,
  Renderer: ReactDOM.Renderer = ReactDOM.hydrate
): IRenderReturn {
  return render(MountElement, Renderer);
}

export default render;
