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

function AddTask({ onAddTask }) {}
