import { useReducer } from "react";

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      {count}{" "}
      <button
        onClick={function () {
          dispatch();
        }}
      >
        +3
      </button>
    </>
  );
}

function counterReducer(count, action) {
  switch (action.type) {
    case "incremented": {
      return count + 1;
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
