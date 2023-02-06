// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
  } catch (error) {}
}

function submitForm(answer) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (answer.toLowerCase() === "istanbul") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 5000);
  });
}

function show(el) {
  el.style.display = "";
}

function hide(el) {
  el.style.display = "none";
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

let successMessage = document.getElementById("success");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let form = document.getElementById("form");

textarea.oninput = handleTextareaChange;
form.onsubmit = handleFormSubmit;
