const container = document.querySelector(".container");
let size = 900/16;

for (let i = 1; i <= 16*16; i++) {
    const div = document.createElement("div");
    div.style.cssText = `outline: 2px solid black; height: ${size}px; width: ${size}px;`;
    container.appendChild(div);
}

const div = document.querySelectorAll(".container div")

div.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
    })
})