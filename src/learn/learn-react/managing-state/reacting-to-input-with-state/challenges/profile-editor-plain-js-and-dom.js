function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === "Edit Profile") {
    editButton.textContent = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
  }
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let firstNameText = document.getElementById("firstNameText");
let lastNameText = document.getElementById("lastNameText");
let editButton = document.getElementById("editButton");
let form = document.getElementById("form");

form.onsubmit = handleFormSubmit;
