import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';

const App = () => {
  return (
    <div>
      <Todos />
    </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));