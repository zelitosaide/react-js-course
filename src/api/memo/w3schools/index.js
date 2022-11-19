import { useState } from "react";
import { Todos } from "./todos";

export function Index() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  function increment() {
    setCount(function (c) {
      return c + 1;
    });
  }

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
