const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.setAttribute("style", "color: red");
para.innerText = "Hey I'm red";

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: blue");
h3.innerText = "I'm a blue h3!";

const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black, background-color: pink");
const h1 = (document.createElement("h1"));
const p = (document.createElement("p"));
h1.innerText = "I’m in a div";
p.innerText = "ME TOO"
div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);
container.appendChild(h3);
container.appendChild(para);
container.appendChild(content);