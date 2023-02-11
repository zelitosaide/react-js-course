import { useState } from "react";

import { tasks as initialTasks } from "../../../../data/data";

export default function Index() {
  return <TaskApp />;
}

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1>Prague itinerary</h1>
    </>
  );
}
