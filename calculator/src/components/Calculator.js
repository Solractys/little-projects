import './Calculator.css'
import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

export default class Calculator extends Component {
 
  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.SetOperation = this.SetOperation.bind(this);
  }
  addDigit (n) {
    console.log(n)
  }
  clearMemory() {
    console.log("Limpar")
  }

  SetOperation(operator) {
    console.log(operator)
  }
  render() {
    return (
      <div className='calculator'>
        <Display value={100} />
        <Button label='AC'click={this.clearMemory} triple/>
        <Button label='/' click={this.SetOperation} operator />
        <Button label='7' click={this.addDigit}/>
        <Button label='8' click={this.addDigit}/>
        <Button label='9' click={this.addDigit}/>
        <Button label='*' click={this.SetOperation} operator />
        <Button label='4' click={this.addDigit}/>
        <Button label='5' click={this.addDigit}/>
        <Button label='6' click={this.addDigit}/>
        <Button label='-' click={this.SetOperation} operator />
        <Button label='1' click={this.addDigit}/>
        <Button label='2' click={this.addDigit}/>
        <Button label='3' click={this.addDigit}/>
        <Button label='+' click={this.SetOperation} operator />
        <Button label='0' click={this.addDigit} double />
        <Button label='.' click={this.addDigit}/>
        <Button label='=' click={this.SetOperation} operator />
      </div>
    );
  }
}
