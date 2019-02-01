import React, { Component } from 'react';

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
 } from 'react-router-dom';

import getsmurf from './getsmurf.jpg';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

   axios
    .post('http://localhost:3333/smurfs', this.state)
    .then(res => {
      console.log(res)
    })
    .catch (err => {
      console.log(err)
    })

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      
      <div className="SmurfForm">
        <br />
        <p>Gargamel: Let's find some Smurfs, Azrael!</p>
        <p>Azrael: Reowwww!</p>
        <p>Gargamel: Yes, but we need some information about our prey.</p>
        <p>Azrael: Meowwwww?</p>
        <p>Gargamel: Oh look, here comes one now...</p>
        <p>Azrael: MeeeRowww</p>
        <br />
        <img src={getsmurf} />
        <form onSubmit={this.addSmurf}>
        <br></br>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default SmurfForm;
