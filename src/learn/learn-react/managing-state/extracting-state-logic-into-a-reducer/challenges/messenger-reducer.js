export const initialState = {
  selectedId: 0,
  message: "Hello",
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
