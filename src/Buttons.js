import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={props.changeCounterValue}>Add 1</button>
      <button onClick={() => props.resetCounter(true)}>Reset</button>
      <button onClick={() => props.resetCounter(false)}>Set Init Value</button>
      {/* Funkcja anonimowa: ()=>{} */}
    </div>);
}

export default Buttons;