import { useState } from "react";

import { todos as initialTodos } from "../../../../../data/data";

/**
 * Challenge 3 of 4: Fix the mutations using non-mutative methods
 *
 * In this example, all of the event handlers in App.js use mutation. As a
 * result, editing and deleting todos doesn’t work. Rewrite handleAddTodo,
 * handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:
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
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={function (e) {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          onClick={function () {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}{" "}
        <button
          onClick={function () {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
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
      {todoContent}
      <button
        onClick={function () {
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </label>
  );
}
