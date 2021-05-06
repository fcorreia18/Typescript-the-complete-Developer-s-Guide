import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const anchor = document.querySelector('a');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (type.value == "invoice") {
        docs = new Invoice(tofrom.value, details.value, parseInt(amount.value));
    }
    else {
        docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    return console.log(docs);
});
