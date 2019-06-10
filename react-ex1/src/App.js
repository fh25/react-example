import React from 'react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 20 },
            { name: 'Fernando', age: 35 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = () => {
        // console.log('I got clicked!');
        // DON'T DO THIS this.state.persons[0].name = 'Roger'; can't edit state directly
        this.setState({
            persons: [
                { name: 'Roger', age: 34 },
                { name: 'Fernando', age: 35 }
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <p> This is really working!</p>
                <button onClick={this.switchNameHandler} >Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
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
