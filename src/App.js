import React from 'react';
import { Paginate } from 'components/Paginate';
import './App.css';

const Component = ({name}) => {
  return (
    <div>{name}</div>
  );
}

const data = [{ name: 'Alex' }, { name: 'Joy' }];

const App = () => {
  return (
    <Paginate
      data={data}
      Component={Component}
      pageSize={2}
      limit={1}
    />
  );
}

export default App;
