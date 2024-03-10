import './Calculator.css'
import Button from './Button';
import Display from './Display';

function Calculator () {
  return(
  <div className='calculator'>
    <Display value={100}/>
      <Button label='AC' triple/> 
    <Button label='/' operator/> 
    <Button label='7'/> 
    <Button label='8'/> 
    <Button label='9'/> 
    <Button label='*' operator/> 
    <Button label='4'/> 
    <Button label='5'/> 
    <Button label='6'/> 
    <Button label='-' operator/> 
    <Button label='1'/> 
    <Button label='2'/> 
    <Button label='3'/> 
    <Button label='+' operator/> 
    <Button label='0' double/> 
    <Button label='.'/> 
    <Button label='=' operator/> 
  </div>    
  );
}
export default Calculator;
