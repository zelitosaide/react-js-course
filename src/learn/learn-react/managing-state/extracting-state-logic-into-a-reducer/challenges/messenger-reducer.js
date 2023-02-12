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
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
