export function tasksReducerWithImmer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changed": {
      const index = draft.findIndex(function (t) {
        return t.id === action.task.id;
      });
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      const index = draft.findIndex(function (t) {
        return t.id === action.id;
      });
      draft.splite(index, 1);
      // return draft.filter(function (t) {
      //   return t.id !== action.id;
      // });
      break;
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
