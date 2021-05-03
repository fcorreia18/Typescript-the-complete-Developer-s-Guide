"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    /**
     * format
     */
    format() {
        return `${this.client} owes ${this.amount}kz for ${this.details}`;
    }
}
const invOne = new Invoice("Francisco Correia", "Work form website", 600000);
const invoices = [];
invoices.push(invOne);
console.log(invOne, invoices);
const anchor = document.querySelector('a');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    return console.log(` ${type.value}, ${tofrom.value}, ${details.value}, ${amount.value}`);
});
