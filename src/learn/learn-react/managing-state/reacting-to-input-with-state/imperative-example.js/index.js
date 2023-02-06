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

let textarea = document.getElementById("textarea");
let button = document.getElementById("button");

textarea.oninput = handleTextareaChange;
