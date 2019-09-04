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
