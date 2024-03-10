import './Button.css';

export default props =>
  <button className={`
    button
${props.operator? 'operator': ''}
${props.triple? 'triple': ''}
${props.double? 'double': ''}
 
`}>{props.label}</button>

