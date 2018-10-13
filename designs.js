// Select color input
var color;

// Select size input
var height, width;

// EventListener attached set to false on page load
var attached = false;

// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector('#sizePicker');

submitButton.addEventListener('submit', function (event) {
    event.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(h, w) {
    event.preventDefault();
    const canvas = document.querySelector('#pixelCanvas');

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (let i = 1; i <= h; i++) {
        const tableRow = document.createElement('tr');
        canvas.appendChild(tableRow);

        for (let j = 1; j <= w; j++) {
            const box = document.createElement('td');
            tableRow.appendChild(box);
        }
    }

    if (!attached) {
        attached = true;
        canvas.addEventListener('click', function(event) {
            if (!event.target.hasAttribute('style')) {
                event.target.setAttribute('style', 'background-color: ' 
                + color);
            } else {
                event.target.removeAttribute('style');
            }
        });
    }
}