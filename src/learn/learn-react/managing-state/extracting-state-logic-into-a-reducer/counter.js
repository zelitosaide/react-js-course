// import { useReducer } from "react";
import { useReducer } from "./challenges/implement-useReducer-from-scratch";

export default function Index() {
  return <Counter />;
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div style={{ clear: "both" }}>
      {count}{" "}
      <button
        onClick={function () {
          dispatch({ type: "incremented" });
          dispatch({ type: "incremented" });
          dispatch({ type: "incremented" });
        }}
      >
        +3
      </button>
    </div>
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
