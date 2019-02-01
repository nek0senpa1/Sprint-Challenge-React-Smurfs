import React, { Component } from 'react';

import Smurf from './Smurf';

import village from './village.jpg';

class Smurfs extends Component {
  constructor(props){
    super(props)
  }

  

  render() {
    console.log(this.eatSmurf)
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <img src={village} />
        <br></br><br></br>
        <hr></hr>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurf={smurf}
                eatSmurf={this.props.eatSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
