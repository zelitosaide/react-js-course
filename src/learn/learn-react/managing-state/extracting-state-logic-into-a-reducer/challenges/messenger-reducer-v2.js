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
  }
}
