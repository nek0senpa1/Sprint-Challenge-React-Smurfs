import React from 'react';

import ate from './ate.jpg';

const Ate = props => {
  //console.log(props.eatSmurf)
  return (
    <div className="Smurf">
    
      <h3> You ate a Smurf</h3>
      
      <img src={ate} />
      
      <br />
      <button onClick={event => {props.eatSmurf(event, props.smurf)}}>Eat this Smurf</button>
      <br />
      <hr />
    </div>
  );
};



export default Ate;