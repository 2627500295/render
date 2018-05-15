# render
ReactDOM.render Helper for Decorator

## 用法

```bash
npm install --save github:2627500295/render
```

```javascript
import { render, hydrate } from 'render';
```

```javascript
import * as React from 'react';
import { render } from 'render';

const rootElement: HTMLElement | null = document.getElementById('root');

@render(rootElement)
export default class appBootstrap extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>这是一个 React 的演示页面!</p>
      <div>
    )
  }
}
```


## 例子

./src/index.tsx

### Simple

```javascript
import * as React from 'react';
import { hot } from 'react-hot-loader';

import { render } from './utils/render';

import Root from './contariners/Root';

@render()
@hot(module)
export default class Bootstrap extends React.Component {
  public render() {
    return <Root />;
  }
}
```

### Complicated

```javascript
import * as React from 'react';
import { hot } from 'react-hot-loader';

import { render } from './utils/render';

interface IBootstrapProps {
  readonly world: string;
}

interface IBootstrapState {
  brand: string;
}

@render()
@hot(module)
export default class Bootstrap extends React.Component<
  IBootstrapProps,
  IBootstrapState
> {
  public static defaultProps: IBootstrapProps = {
    world: 'React'
  };

  public state = {
    brand: 'React'
  };

  public constructor(props: IBootstrapProps, state: IBootstrapState) {
    super(props, state);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const { brand } = this.state;

    this.setState({
      brand: brand
        .split('')
        .reverse()
        .join('')
    });
  }

  public render(): React.ReactElement<IBootstrapProps> {
    const { world } = this.props;
    const { brand } = this.state;

    return (
      <div>
        <h1>Hello {world}!</h1>
        <p>欢迎使用 {brand}!</p>
        <button onClick={this.handleClick}>点我一下</button>
      </div>
    );
  }
}
```
