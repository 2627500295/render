import React from 'react';
import ReactDOM from 'react-dom';
export declare type IRenderReturn = (ReactComponentClass: React.ComponentClass) => void;
export declare function render(MountElement?: HTMLElement | null, Renderer?: ReactDOM.Renderer): IRenderReturn;
export declare function hydrate(MountElement?: HTMLElement | null, Renderer?: ReactDOM.Renderer): IRenderReturn;
export default render;
