import * as React from 'react';
import * as ReactDOM from 'react-dom';
export declare type IRenderReturn = (RCC: React.ComponentClass) => void;
export declare function render(MountElement?: HTMLElement, Renderer?: ReactDOM.Renderer): IRenderReturn;
export declare function hydrate(MountElement?: HTMLElement): IRenderReturn;
export default render;
