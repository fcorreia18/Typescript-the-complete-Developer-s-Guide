import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const anchor = document.querySelector('a');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const template = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    let values;
    values = [tofrom.value, details.value, parseInt(amount.value)]; //AsNumber is a js default function thats tranforms a string into a number.
    if (type.value == "invoice") {
        docs = new Invoice(...values);
        template.render(docs, type.value, "start");
    }
    else {
        docs = new Payment(...values);
        template.render(docs, type.value, "end");
    }
});
