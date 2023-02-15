const body = document.body
const container = document.querySelector('.container');
const title = document.querySelector('.game-title');
const grid_div = document.querySelector('.grid');
const random_btn = document.querySelector('.random-button');
const color_input = document.querySelector('.color-selector');
const range_input = document.querySelector('.text-box');
const size_btn = document.querySelector('.set-size-button');
const reset_btn = document.querySelector('.reset-button');









function populateGridDiv(size){
    grid_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    grid_div.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size ; i++){
        let box = document.createElement('div')
        grid_div.append(box)
    }
}



