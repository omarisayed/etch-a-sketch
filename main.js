const body = document.body
const container = document.querySelector('.container');
const title = document.querySelector('.game-title');
const grid_div = document.querySelector('.grid');
const color_input = document.querySelector('.color-selector');
const range_input = document.querySelector('.text-box');
const size_btn = document.querySelector('.set-size-button');
const clear_btn = document.querySelector('.clear-button');

grid_div.style.gridTemplateColumn = 'reapeat(16, 1fr)';