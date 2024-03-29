import './Button.css';

export default props =>
  <button
    onClick={e =>props.click && props.click(props.label)}
    className={`
    button
${props.operation ? 'operation' : ''}
${props.triple ? 'triple' : ''}
${props.double ? 'double' : ''}
 
`}>{props.label}</button>

