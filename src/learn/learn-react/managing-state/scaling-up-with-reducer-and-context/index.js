import { useState } from "react";

export default function Index() {
  return <TaskApp />;
}

function TaskApp() {
  function handleAddTask() {}

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
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
      />{" "}
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
