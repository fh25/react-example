import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 20 },
            { name: 'Vanessa', age: 25 },
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
                { name: 'Steve', age: 25 },
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
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Racing</Person>
            </div>
        );
    }
}

// const App = props => {
//   //useState will always return 2 elements, 1st is the current state and the 2nd is the function to update the state
//   //array destructuring shown below
//   const [ personsState, setPersonsState ] = useState({
//       persons: [
//           { name: 'Max', age: 28 },
//           { name: 'Fernando', age: 35 }
//       ],
//       otherState: 'some other value'
//   });
//
//   const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'Roger', age: 34 },
//                 { name: 'Fernando', age: 35 }
//             ]
//         })
//     };
//
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//         <p> This is really working!</p>
//         <button onClick={switchNameHandler} >Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
//     </div>
//   );
// }

export default App;