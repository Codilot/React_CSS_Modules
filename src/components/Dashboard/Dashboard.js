import React from 'react';
import classes from './Dashboard.css';

const dashboard = (props) => {
    
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
  
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Dashboard}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>My persons dashboard</p>
            <button
                className={btnClass}
                onClick={props.toggle}>
                Toggle Persons
            </button>
 
        </div>
    );
}

export default dashboard;