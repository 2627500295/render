import React from 'react';
import ReactDOM from 'react-dom';
export declare type IRenderReturn = (ReactComponentClass: React.ComponentClass) => void;
/**
 * Render
 *
 * @param MountElement 挂载元素
 * @param Renderer 渲染方式
 * @returns 渲染组件函数
 */
export declare function render(MountElement?: HTMLElement | null, Renderer?: ReactDOM.Renderer): IRenderReturn;
/**
 * Hydrate
 *
 * @param MountElement 挂载元素
 * @param Renderer 渲染方式
 * @returns 渲染组件函数
 */
export declare function hydrate(MountElement?: HTMLElement | null, Renderer?: ReactDOM.Renderer): IRenderReturn;
export default render;
