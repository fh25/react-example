import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
        <p> This is really working!</p>
        <button>Switch Name</button>
      <Person name="Fernando" age="35" />
      <Person name="Max" age="28" >My Hobbies: Racing</Person>
    </div>
  );
}

export default App;
