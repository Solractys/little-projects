import './Button.css';

export default props =>
  <button
    onClick={e =>props.click && props.click(props.label)}
    className={`
    button
${props.operator ? 'operator' : ''}
${props.triple ? 'triple' : ''}
${props.double ? 'double' : ''}
 
`}>{props.label}</button>

