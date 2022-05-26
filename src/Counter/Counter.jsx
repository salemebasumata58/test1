import React, { useReducer } from "react";

const initState = {
  counter: 0,
  noofClicks: 0
};
const counterActions = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset"
};

const reducer = (state, action) => {
  switch (action.type) {
    case counterActions.increment: {
      return {
        ...state,
        counter: state.counter + 1,
        noofClicks: state.noofClicks + 1
      };
    }
    case counterActions.increment: {
      return {
        ...state,
        counter: state.counter - 1,
        noofClicks: state.noofClicks - 1
      };
    }
    case counterActions.increment: {
      return {
        ...state,
        counter: 0,
        noofClicks: 0
      };
    }
    default:
      return state;
  }
};

function Counter({ a }) {
  const [state, dispatch] = useReducer(reducer, initState, a);
  return (
    <div>
      <h2>Count:{state.counter}</h2>
      <h2>No of Clicks : {state.noofClicks}</h2>

      <button
        onClick={() =>
          dispatch({
            type: counterActions.increment
          })
        }
      >
        {" "}
        Add
      </button>
    </div>
  );
}
export default Counter;
