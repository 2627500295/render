# render
ReactDOM.render Helper for Decorator

&nbsp;

## 用法

### 安装

```bash
yarn add github:2627500295/render
```

OR

```
npm install github:2627500295/render
```

&nbsp;

### 使用

```javascript
import render, { hydrate } from 'render';
```

#### ES6

./src/app.jsx

```javascript
import React, { Component } from 'react';

class App extends Component {
  render = () => (
    <div>
      <h1>Hello React!</h1>
      <p>这是一个 React 的演示页面!</p>
    <div>
  )
}

export default App;
```

./src/index.js

```javascript
import render from 'render';
import App from './App';

render()(App);
```

&nbsp;

#### ES7 Decorator

./src/app.jsx

```javascript
import React, { Component } from 'react';

class App extends Component {
  render = () => (
    <div>
      <h1>Hello React!</h1>
      <p>这是一个 React 的演示页面!</p>
    <div>
  )
}

export default App;
```

./src/index.js

```javascript
import render from 'render';
import App from './App';

@render()
class Bootstrap extends React.Component {
  render = () => <Root />;
}

export default Bootstrap;
```

&nbsp;

#### 自定义挂载元素

./src/index.tsx

```javascript
import render from 'render';
import App from './App';
const appContainer = document.querySelector('.AppContainer');

render(appContainer)(App);
```

&nbsp;

#### 自定义渲染方式

```javascript
import ReactDOM from 'react-dom';
import render from 'render';
import App from './App';

render(null, ReactDOM.hydrate)(App);
```

建议使用方法

```javascript
import { hydrate } from 'render';
import App from './App';

hydrate()(App);
```