import React from 'react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 20 },
            { name: 'Fernando', age: 35 }
        ]
    };

    switchNameHandler = () => {
        console.log('I got clicked!');
    };

    render() {
        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <p> This is really working!</p>
                <button onClick={this.switchNameHandler} >Switch Name</button>
                <Person name="Fernando" age="35"/>
                <Person name="Max" age="28">My Hobbies: Racing</Person>
            </div>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//         <p> This is really working!</p>
//         <button> onClick={this.switchNameHandler} Switch Name</button>
//       <Person name="Fernando" age="35" />
//       <Person name="Max" age="28" >My Hobbies: Racing</Person>
//     </div>
//   );
// }



export default App;
