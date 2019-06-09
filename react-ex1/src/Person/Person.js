//In it's simpliest form a component is just a function that returns some JS
//strongly recommended to use ES6 as best practice
//could assign person a result of a function
//function () {} would work fine but we want to use arrow function (ES6)
//  so that we take advantage of new syntax and better handles this keyword
import React from 'react';

const person = () => {
    return <p>I'm a person!</p>
};

export default person;


