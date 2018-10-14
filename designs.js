// Set default color value
const colorChoice = document.querySelector('#colorPicker');
let color = colorChoice.value;

// Select size input
let height, width;

// EventListener attached variable set to false initially
let attached = false;

// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector('#sizePicker');

submitButton.addEventListener('submit', function (event) {
    event.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});

// Change color
colorChoice.addEventListener('change', function() {
    color = colorChoice.value;
});

function makeGrid(h, w) {
    event.preventDefault();
    const canvas = document.querySelector('#pixelCanvas');

    // Clears the grid
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

    // Check if EventListener is already attached to prevent multiples
    if (!attached) {
        attached = true;
        canvas.addEventListener('click', function(event) {
            if (event.target.nodeName === 'TD') { // Verify target is td element
                if (!event.target.hasAttribute('style')) {
                    event.target.setAttribute('style', 'background-color: ' + 
                    color);
                } else {
                    event.target.removeAttribute('style');
                }
            }
        });
    }
}