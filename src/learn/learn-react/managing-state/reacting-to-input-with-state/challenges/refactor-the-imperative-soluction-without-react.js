/**
 * Challenge 3 of 3: Refactor the imperative solution without React
 *
 * Imagine React didn’t exist. Can you refactor this code in a way
 * that makes the logic less fragile and more similar to the React
 * version? What would it look like if the state was explicit, like in React?
 *
 * f you’re struggling to think where to start, the stub below already
 * has most of the structure in place. If you start here, fill in the
 * missing logic in the updateDOM function. (Refer to the original code where needed.)
 */
let firstName = "Jane";
let lastName = "Jacobs";
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function setIsEditing() {}

let form = document.getElementById("form");

form.onsubmit = handleFormSubmit;
