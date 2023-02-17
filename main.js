const body = document.body
const container = document.querySelector('.container');
const title = document.querySelector('.game-title');
const grid_container = document.querySelector('.grid-container');
const erase_btn = document.querySelector('.erase-button');
const black_btn = document.querySelector('.black-button');
const rainbow_btn = document.querySelector('.rainbow-button');
const input_textbox = document.querySelector('.size-textbox');
const submit_btn = document.querySelector('.submit-button');
const reset_btn = document.querySelector('.reset-button');

//event listeners

reset_btn.addEventListener("click", resetGridSize);



// functions

function populateGridContainer(size) {
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div')
        grid_container.append(box)
    }
}

function changeGridSize(value) {
    if ((value < 1) || (value > 100)){
        window.alert('You can only insert between 1 and 100!');
    }else{
        clearGridContainer(); // each time I submit a new size, the grid container gets cleared first until it has no existing boxes left. Then I populate the grid container.
        populateGridContainer(value);
    }
}

function clearGridContainer() {
    let boxes = grid_container.querySelectorAll('div')
    boxes.forEach(function deleteBoxes(div) {   //remove each div
        div.remove();
    })
}

function resetGridSize(){
    populateGridContainer(16);  // I choose 16 to be the default size when grid container is reset
    input_textbox.value = '16'
}

