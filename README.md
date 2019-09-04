# PaginatorComponent

@@TODO: _badges_

@@TODO: _description_

## Instalation

```sh
$ npm install --save paginator-react-component
```

or

```sh
$ yarn add paginator-react-component
```

## Usage

```js
import { Paginate } from 'paginator-react-component';

import './App.css';

const Component = ({ name }) => {
  return (
    <div>{name}</div>
  );
};

const data = [
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Swift' },
  { name: 'Java' },
  { name: 'PHP' },
  { name: 'C#' },
];

const App = () => {
  return (
    <Paginate
      data={data}
      Component={Component}
      limit={3}
    />
  );
};

export default App;
```

## Properties

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `data` | `Object[]` | `[]` | the data array for render |
| `Component` | `Component` | - | component to be drawn |
| `limit` | `Number` | Infinity | the limit of components shown in a single tab |
