import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Max', age: 20 },
            { id: '12', name: 'Vanessa', age: 25 },
            { id: '13', name: 'Fernando', age: 35 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); //copies the full array and returns a new one
        const persons = [...this.state.persons]; //spreads elements in old array to new array
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = ( event, id ) => {
       const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
       });

       const person = {
           ...this.state.persons[personIndex]
       };

       person.name = event.target.value;
       const persons = [...this.state.persons];
       persons[personIndex] = person;

        this.setState({persons: persons})
    };

    togglePersonsHandler = ( ) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow}); //using setState will Merge this with state
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
           persons = (
               <div>
                   {this.state.persons.map((person, index) => {
                       return <Person
                           click={() => this.deletePersonHandler(index)}
                           name={person.name}
                           age={person.age}
                           key={person.id}
                           changed={(event) => this.nameChangedHandler(event, person.id)}/>
                   })}
               </div>
           );
        }

        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <p> This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler} >Toggle Persons</button>
                {persons}
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