import React from 'react';
import '../CircleSelector/CircleSelector.css';

function CircleSelector(props) {
  const handleChange = event => {
    props.onChange(event.target.value);
  };

  if (props.selected)
    return (
      <div className="CircleSelector">
        <button 
          value="1"
          onClick={handleChange}
          className={props.selected === "1" ? "selected" : false}>
          {props.selected === "1" ? "CIRLE 1 SELECTED" : "Select Circle 1"}  
        </button>
        <button 
          value="2"
          onClick={handleChange}
          className={props.selected === "2" ? "selected" : false}>
          {props.selected === "2" ? "CIRLE 2 SELECTED" : "Select Circle 2"}  
        </button>
        <button 
          value="3"
          onClick={handleChange}
          className={props.selected === "3" ? "selected" : false}>
          {props.selected === "3" ? "CIRLE 3 SELECTED" : "Select Circle 3"}  
        </button>
        <button 
          value="4"
          onClick={handleChange}
          className={props.selected === "4" ? "selected" : false}>
          {props.selected === "4" ? "CIRLE 4 SELECTED" : "Select Circle 4"}  
        </button>
       

      </div>
    );
}

//<div className={<conditional expression> ? 'name-of-class' : ''}>
export default CircleSelector;