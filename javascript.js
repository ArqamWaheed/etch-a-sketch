const container = document.querySelector(".container");
const reset = document.querySelector("#reset");
const dimensions = document.querySelector("#dimensions");

let grids = 16; // 16 x 16 grid by default
generateGrid()


function generateGrid() { // Creates the grid and adds the sketching functionality
    let size = 900/grids;
    for (let i = 1; i <= grids*grids; i++) {
        const div = document.createElement("div");
        div.style.cssText = `outline: 2px solid black; height: ${size}px; width: ${size}px; background-color:white;`;
        container.appendChild(div);
    }
    const div = document.querySelectorAll(".container div")
    div.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
        })
    })
}

reset.addEventListener("click", () => { // Resets the grid.
    const div = document.querySelectorAll(".container div")
    div.forEach((element) => {
        element.style.backgroundColor = "white";
    })
})

dimensions.addEventListener("click", () => { // Sets the grid dimensions.
    let value = parseInt(prompt("Select your grid, can be from 10x10 to 100x100. Enter ONLY n for a n x n grid."));
    if (value >= 10 && value <= 100) grids = value;
    else {
        alert("WRONG INPUT! Should only be an integer within range 10 to 100");
    }
    const div = document.querySelectorAll(".container div")
    div.forEach((element) => {
        container.removeChild(element);
    })
    generateGrid()
})
