import React from 'react';

//const Counter = ({count, onDecrement, onIncrement, onReset }) => {
const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <button onClick={props.onDecrement}>-</button>
        <span>{props.count}</span>
        <button onClick={props.onIncrement}>+</button>
        <br />
        {/*<button onClick={onReset}>Reset</button>*/}
      </div>
      <p>Times the increment/decrement buttons Have been clicked: {props.countCounter}</p>
      <p>
        <input id='tagSetCounter' type="number" ></input><button onClick={props.onSetCounter}>Change Count number</button>
      </p>

    </div>
  );
}


export default Counter;