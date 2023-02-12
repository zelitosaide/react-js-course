import { contactsV2 as contacts } from "../../../../../data/data";

export const initialState = {
  selectedId: 0,
  messages: contacts.reduce(function (obj, contact) {
    return { ...obj, [contact.id]: "Hello, " + contact.name };
  }, {}),
  // messages: {
  //   0: 'Hello, Taylor',
  //   1: 'Hello, Alice',
  //   2: 'Hello, Bob',
  // }
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.contactId]: action.message,
        },
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
