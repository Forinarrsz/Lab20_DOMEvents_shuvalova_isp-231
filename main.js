console.log(document);
const title = document.getElementById("title");
const text = document.querySelector(".text");
console.log(title);
console.log(text);

title.textContent = "DOM изменен через js";
title.style.color = "red";
title.style.backgroundColor = "#333";
style.style.padding = "10px";
text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("button clicked");
    btn.style.backgroundColor= "#4CAF50";
    btn.style.color = "white";
});