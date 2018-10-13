// Select color input
var color;

// Select size input
var height;
var width;

// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector('#sizePicker');

submitButton.addEventListener('submit', function (event) {
    event.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {

}



console.log('color choice is ' + color);