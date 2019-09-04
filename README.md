## Instalation
`npm install --save paginator-react-component` or
`yarn add paginator-react-component`


## Usage
```
import React from 'react';
import { Paginate } from 'components/Paginate';
import './App.css';

const Component = ({name}) => {
  return (
    <div>{name}</div>
  );
}

const data = [{ name: 'Alex' }, { name: 'Joy' }, { name: 'Joy 2' },{ name: 'Alex' }, { name: 'Joy' }, { name: 'Joy 3' }];

const App = () => {
  return (
    <Paginate
      data={data}
      Component={Component}
      limit={3}
    />
  );
}

export default App;
```
## API
# data
the data array on which to draw components

# Component
component to be drawn

# limit
the limit of components in a single tab





