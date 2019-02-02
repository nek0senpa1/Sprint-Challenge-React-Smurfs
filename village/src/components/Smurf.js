import React from 'react';

const Smurf = props => {
  //console.log(props.eatSmurf)
  return (
    <div className="Smurf">
    
      <h3>{props.smurf.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <br />
      <button onClick={event => {props.eatSmurf(event, props.smurf); props.props.history.push('/Ate')}}>Eat this Smurf</button>
      <br />
      <hr />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

