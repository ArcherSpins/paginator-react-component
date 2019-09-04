## Instalation
`npm install --save paginator-react-component` or
`yarn add paginator-react-component`


## Usage
```
import React from 'react';
import { Paginate } from 'paginator-react-component';
import './App.css';

const Component = ({name}) => {
  return (
    <div>{name}</div>
  );
}

const data = [
  { name: 'JavaScript' },
  { name: 'Swift' },
  { name: 'PHP' },
  { name: 'C#' },
  { name: 'Java' },
  { name: 'Python' }
];

const App = () => {
  return (
    <Paginate
      data={data}
      component={Component}
      limit={3}
    />
  );
}

export default App;
```
## API
### data
the data array on which to draw components

### Component
component to be drawn

### limit
the limit of components in a single tab





