import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading title="React Counter Aplication With Custom Step" class='mainHeading' />
        </header>
        <Counter initValue={33}/>
      </div>
    );
  }
}
export default App;

/* 
- do pola input odwołuj się przez jego referencję np. <input ref={(data) => { this._inputStep = data} } type="number" /> 
- następnie odwołaj się do tego pola w kodzie np. let step = this._inputStep.value;
- dodatkowo będziesz musiał się podpiąć pod zdarzenie onChange tego inputa <input ref={(data) => { this._inputStep = data} } onChange{this.updateStep} type="number" /> 
i gdy jego wartość została zmieniona, to aktualizuj state :) np. this.setState(....); */ 