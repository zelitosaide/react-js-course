import { useState } from "react";

/**
 * Challenge 4 of 4: Implement useReducer from scratch
 *
 * In the earlier examples, you imported the useReducer Hook from React.
 * This time, you will implement the useReducer Hook itself! Here is a stub
 * to get you started. It shouldn’t take more than 10 lines of code.
 *
 * To test your changes, try typing into the input or select a contact.
 */
export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  // function dispatch(action) {
  //   const nextState = reducer(state, action);
  //   setState(nextState);
  // }

  // OR

  function dispatch(action) {
    setState(function (s) {
      return reducer(s, action);
    });
  }

  return [state, dispatch];
}
