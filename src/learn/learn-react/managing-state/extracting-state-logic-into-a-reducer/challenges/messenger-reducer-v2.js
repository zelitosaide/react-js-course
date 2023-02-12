import { contactsV2 as contacts } from "../../../../../data/data";

export const initialState = {
  selectedId: 0,
  messages: contacts.reduce(function (obj, contact) {
    return { ...obj, [contact.id]: "Hello, " + contact.name };
  }, {}),
};

export function messengerReducer(state, action) {
  switch (action.type) {
  }
}
