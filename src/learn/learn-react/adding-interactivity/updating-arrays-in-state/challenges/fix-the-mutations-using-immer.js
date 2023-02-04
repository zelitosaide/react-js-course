import { useState } from "react";

import { todos as initialTodos } from "../../../../../data/data";

/**
 * Challenge 4 of 4: Fix the mutations using Immer
 *
 * This is the same example as in the previous challenge. This time, fix
 * the mutations by using Immer. For your convenience, useImmer is already
 * imported, so you need to change the todos state variable to use it.
 */
let nextId = 3;

export default function Index() {
  return <TaskApp />;
}

function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  );
}

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
