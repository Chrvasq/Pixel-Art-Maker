// Select color input
const colorChoice = document.querySelector("#colorPicker");

// Select size input
const gridHeightInput = document.querySelector("#inputHeight");
const gridWidthInput = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", makeGrid);

function makeGrid(event) {
    event.preventDefault();

}

console.log('grid height is ' + gridHeight);
console.log('grid width is ' + gridWidth);
console.log('color choice is ' + colorChoice);