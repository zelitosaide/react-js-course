# React Memo

Using `memo` will cause React to skip rendering a component if its props have not changed.

This can improve performance.

> This section uses React Hooks. See the [React Hooks](https://www.w3schools.com/react/react_hooks.asp) section for more information on Hooks.

## Problem

In this example, the `Todos` component re-renders even when the todos have not changed.

```javascript
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Todos } from "./todos";

export function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  function increment() {
    setCount(function(c) {
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

`todos.js`

```javascript
export function Todos({ todos }) {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map(function(todo, index) {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}
```

When you click the increment button, the `Todos` component re-renders.

If this component was complex, it could cause performance issues.