export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: 1,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {}

  return todos.filter(function (todo) {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
