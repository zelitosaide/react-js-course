import { useState } from "react";

import { tasks as initialTasks } from "../../../../data/data";

let nextId = 3;

export default function Index() {
  return <TaskApp />;
}

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map(function (t) {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(
      tasks.filter(function (t) {
        return t.id !== taskId;
      })
    );
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <button
        onClick={function () {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(function (task) {
        return (
          <li key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={function (e) {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />{" "}
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
    taskContent = (
      <>
        {task.text}{" "}
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
        checked={task.done}
        onChange={function (e) {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={function () {
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </label>
  );
}
