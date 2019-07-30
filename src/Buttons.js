import React from 'react';


const Buttons = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={props.changeCounterValue}>Add {props.stepValue}</button>
      <button onClick={() => props.resetCounter(true)}>Reset</button>
      <button onClick={() => props.resetCounter(false)}>Set Init Value</button>
      {/* Funkcja anonimowa: ()=>{} */}
    </div>);
}

export default Buttons;