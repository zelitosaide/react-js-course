function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === "Edit Profile") {
    editButton.textContent = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  }
}

function handleFirstNameChange() {}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameText = document.getElementById("lastNameText");
let editButton = document.getElementById("editButton");
let form = document.getElementById("form");

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
