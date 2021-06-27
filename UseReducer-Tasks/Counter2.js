import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

//state -> initialState
//action -> dipatch method parameter
const reducer = (state, action) => {
  switch (action.tpe) {
    case "increment":
      return {
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement":
      return {
        firstCounter: state.firstCounter - action.value,
      };
    case "increment5":
      return {
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement5":
      return {
        firstCounter: state.firstCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {count.firstCounter}</h1>
      <button onClick={() => dispatch({ tpe: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ tpe: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ tpe: "increment5", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ tpe: "decrement5", value: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ tpe: "reset", value: 1 })}>
        reset
      </button>
    </div>
  );
}

export default Counter2;