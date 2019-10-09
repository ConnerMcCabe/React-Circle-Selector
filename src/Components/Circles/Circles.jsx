import React from 'react';
import '../Circles/Circles.css';

const Circles = (props) => (
  
  <div className='Circles'>
    <div className={props.selected === '1' ? 'selected' : true}>1</div>
    <div className={props.selected === '2' ? 'selected' : true}>2</div>
    <div className={props.selected === '3' ? 'selected' : true}>3</div>
    <div className={props.selected === '4' ? 'selected' : true}>4</div>
  </div>

)
//<div className={<conditional expression> ? 'selected' : 'null'}>
export default Circles;