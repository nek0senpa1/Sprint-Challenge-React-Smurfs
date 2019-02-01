import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import img1 from './garg.jpg';
import img2 from './azra.jpg';


import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
 } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then ( res => {
      console.log(res)
      
      this.setState({
        smurfs: res.data
      })
    })
    .catch (err => {
      console.log(err)
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.


  eatSmurf = (event, smurfy) => {
    event.prventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${smurfy.id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  }
  
  render() {
    return (
      <div className="App">
        <nav>
        <img src ={img2} alt ="Azrael" />
          <img src ={img1} alt ="Gargamel"/>
          
          <h1 className="garg-header">Gargamel's Ingredients</h1>
          <hr></hr>
          <div className="nav-links">
            <Link to="/">Smurf List</Link>
            <Link to="/Add">Add Smurf</Link>
            
          </div>
          <hr></hr>
        </nav>

        <Route exact path="/" 
          render = {props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          smurfs={this.state.smurfs}
          eatSmurf={this.eatSmurf}
        />
        <Route path="/Add"
          render= {props => <SmurfForm {...props} smurfs={this.state.smurfs} /> } 
        />
        
      </div>
    );
  }

  
//   render() {
//     return (
//       <div className="App">
//         <SmurfForm />
//         <Smurfs smurfs={this.state.smurfs} />
//       </div>
//     );
//   }
 }

export default App;
