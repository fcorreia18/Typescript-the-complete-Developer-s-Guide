"use strict";
const anchor = document.querySelector('a');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    return console.log(`${anchor.text}, ${type.value}, ${tofrom.value}, ${details.value}, ${amount.value}`);
});
