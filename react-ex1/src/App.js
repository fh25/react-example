import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <Person />
    </div>
  );
  // below is what happens behind the scenes when using JSX:
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
