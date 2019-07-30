import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Step from './Step';

class Counter extends Component {

  constructor(props) {
    super(props);  // Pozwala wyciągnąć dziedziczenie pól z klasy po której dzieziczymy
    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1
    }
  }

  //Poniżej mamy modelowy sposób aktualizacji stanu
  changeNumber = () => {
    console.log('dodaj 1');
    this.setState(prevState => {
      return ({ counterValue: prevState.counterValue + this.state.stepValue })
    });
    /* !!!!!! Set state może przyjąć dwa parametry: albo obiekt stanu albo funckja zwrotna */

  }

  handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    console.log('dodano wartość ustawioną');
    this.setState({stepValue: value});
  }


  // resetCounter = () => {
  //     console.log('zresetuj counter');
  //     this.setState({counterValue: 0});
  // }
  /* Czym powyższe różni się od : changeNumber = () {} */

  // initCounter = () => {
  //     console.log('ustaw initValue');
  //     this.setState({counterValue: this.props.initValue});
  // }

  resetCounter = (reset) => {
    if (reset) {
      this.setState({ counterValue: 0 });
      console.log(reset);
    } else {
      console.log('ustaw initValue');
      this.setState({ counterValue: this.props.initValue });
    }


  }



  render() {
    // w render nie wolno robić set state, bo wpadniemy w pętlę renderowania
    console.log(this);
    return (
      <div className="counter">
        <label>This is Counter: {this.state.counterValue} </label>
        <Buttons resetCounter={this.resetCounter} changeCounterValue={this.changeNumber} />
        <Step handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Counter;

/* Funkcje - szybkie przypomnienie:
function example () = {'...return('');'}
const example = () => {'...return('');'}
Jeżeli masz tylko jedną linię można pominąć klamry w ES6: const example = () => '' ;


Z if też tak można robić, jedną linijkę np.: if (true) = smth... bez klamer

*/
