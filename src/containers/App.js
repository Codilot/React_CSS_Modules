import React, { PureComponent, Fragment } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Dashboard from '../components/Dashboard/Dashboard';
import WithClass from '../hoc/WithClass';
import withOtherClass from '../hoc/withOtherClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillmount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidmount');
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] UPDATE Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] UPDATE Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] UPDATE Inside componentDidUpdate');
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] Inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <WithClass classes={classes.App}>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </WithClass>
      );

    }

    return (
      <Fragment>
      <button onClick={ () => { this.setState({showPersons: true }) } }>Show Persons</button>
        <Dashboard
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          appTitle={this.props.title}
        />
        {persons}
      </Fragment>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withOtherClass(App, classes.App);
