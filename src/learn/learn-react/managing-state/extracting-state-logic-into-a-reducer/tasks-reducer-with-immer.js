export function tasksReducerWithImmer(draft, action) {
  switch (action.type) {
    case "added": {
      return draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
    }
    case "changed": {
      return draft.map(function (t) {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return draft.filter(function (t) {
        return t.id !== action.id;
      });
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
