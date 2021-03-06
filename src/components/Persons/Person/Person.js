import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withOtherClass from '../../../hoc/withOtherClass';


class Person extends Component {

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
            showPersons: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Person.js] UPDATE Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Person.js] UPDATE Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.state.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.click !== this.props.click;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Person.js] UPDATE Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Person.js] UPDATE Inside componentDidUpdate');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }      
    }

    componentDidMount(){
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={(inp) => { this.inputElement = inp }} 
                />
                {console.log(this.inputElement)}
            </Fragment>
        );

        // return (
        //     [
        //         <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //         <p key="2">{this.props.children}</p>,
        //         <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        //     ]
        // );

    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    ref: PropTypes.string
}

export default withOtherClass(Person, classes.Person);