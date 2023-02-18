const body = document.body
let color = 'black'; // initial/default color 
const container = document.querySelector('.container');
const title = document.querySelector('.game-title');
const grid_container = document.querySelector('.grid-container');
const erase_btn = document.querySelector('.erase-button');
const color_btn = document.querySelectorAll('.color-buttons');
const black_btn = document.querySelector('.black-button');
const rainbow_btn = document.querySelector('.rainbow-button');
const input_textbox = document.querySelector('.size-textbox');
const submit_btn = document.querySelector('.submit-button');
const reset_btn = document.querySelector('.reset-button');

//event listeners

reset_btn.addEventListener("click", resetGridSize);

black_btn.addEventListener("click", () => {
    changeColor('black');
})

rainbow_btn.addEventListener("click", () => {
    changeColor('rainbow');
})

erase_btn.addEventListener("click", () => {
    changeColor('#E0E0E0');
});

reset_btn.addEventListener("click", resetGridSize);


//----------------------------------------------------------------------------------------------------------------------

// functions

function populateGridContainer(size) {
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div');
        grid_container.append(box);

        box.addEventListener("mouseover", boxColor);

    }

}
populateGridContainer(16);

//---------------------------------

function changeGridSize(value) {  // this function is called with the onchange event on the textbox in my HTML file
    if ((value < 1) || (value > 100)) {
        window.alert('You can only insert between 1 and 100!');
    } else {
        clearGridContainer(); // each time I submit a new size, the grid container gets cleared first until it has no existing boxes left. Then I populate the grid container.
        populateGridContainer(value); // changes the default populateGridContainer(16) to the same value passed in changeGridSize(value)
    }
}

function clearGridContainer() {
    let boxes = grid_container.querySelectorAll('div')
    boxes.forEach(function deleteBoxes(div) {   //remove each div
        div.remove();
    })
}

function resetGridSize() {
    clearGridContainer()
    populateGridContainer(16);  // I choose 16 to be the default size when grid container is reset
    input_textbox.value = '16'
}

function boxColor() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; //formula for random colors.
    } else {
        this.style.backgroundColor = color;  // here, 'this' keyword refers to a box inside the grid-container. boxColor() function is used inside the populateGrid function and it refers to box. We set is to whatever background color the variable 'color' holds.
    }
}

function changeColor(selection) {   // In the event listeners, I have written the selections.  
    color = selection;

}