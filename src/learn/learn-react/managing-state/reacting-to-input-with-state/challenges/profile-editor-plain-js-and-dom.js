function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === "Edit Profile") {
    editButton.textContent = "Save Profile";
  }
}

let editButton = document.getElementById("editButton");
let form = document.getElementById("form");

form.onsubmit = handleFormSubmit;
