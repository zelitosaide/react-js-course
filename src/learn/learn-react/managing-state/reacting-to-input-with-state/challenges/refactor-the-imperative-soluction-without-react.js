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

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = "Edit Profile";
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText.textContent = "Hello " + firstName + " " + lastName + "!";
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let form = document.getElementById("form");
let helloText = document.getElementById("helloText");
let editButton = document.getElementById("editButton");
let lastNameText = document.getElementById("lastNameText");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let firstNameInput = document.getElementById("firstNameInput");

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
