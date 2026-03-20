console.log(document);
const title = document.getElementById("title");
const text = document.querySelector(".text");
console.log(title);
console.log(text);

title.textContent = "DOM изменен через js";
title.style.color = "red";
title.style.backgroundColor = "#333";
text.style.padding = "10px";
text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "black";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("button clicked");
  btn.style.backgroundColor = "#4CAF50";
  btn.style.color = "white";
});

const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");
const clearButton = document.getElementById("clearButton");

const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const result = document.getElementById("formResult");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    output.textContent = `hi, ${input.value}!`;
    output.style.color = "green";
  } else {
    output.textContent = "please try again";
    output.style.color = "red";
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  output.style.color = "";
  input.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = usernameInput.value.trim();
  const age = Number(ageInput.value);
  result.textContent = `Name: ${name}, Age: ${age}`;
  if (name === "") {
    result.textContent = "Try again";
    result.style.color = "red";
    usernameInput.focus();
    return;
  }
  if (isNaN(age) || age <= 0 || age > 120) {
    result.textContent = "try again";
    result.style.color = "red";
    ageInput.focus();
    ageInput.value = "";
    return;
  }
  result.textContent = `saved: ${name}, ${age}`;
  result.style.color = "green";
  form.reset();
});
