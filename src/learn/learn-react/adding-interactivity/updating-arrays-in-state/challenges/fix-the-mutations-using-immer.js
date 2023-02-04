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

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map(function (todo) {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(function (todo) {
        return todo.id !== todoId;
      })
    );
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map(function (todo) {
        return (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={function (e) {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
      </label>
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
