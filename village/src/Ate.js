import React from 'react';

import ate from './ate.jpg';

const Ate = props => {
  //console.log(smurf)
  return (
    <div className="Smurf">
    
      <h3> You ate a Smurf</h3>
      
      <img src={ate} />
      
      <br />
      <button onClick={event => {props.history.push('/')}}>Back Home</button>
      <p>(Don't Forget To Refresh Your Ingredient List)</p>
      <br />
      <hr />
    </div>
  );
};



export default Ate;