import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./classes/ListTemplate.js";

type INPUT = HTMLInputElement;
const anchor: HTMLAnchorElement = document.querySelector('a')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as INPUT;
const details = document.querySelector('#details') as INPUT;
const amount = document.querySelector('#amount') as INPUT;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const ul = document.querySelector('ul')!;
const template = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let docs: HasFormatter;
    let values: [string, string, number];
    values = [tofrom.value, details.value, parseInt(amount.value)];//AsNumber is a js default function thats tranforms a string into a number.
    if (type.value == "invoice") {
        docs = new Invoice(...values);
        template.render<Invoice>(docs as Invoice, type.value, "start")
    } else {
        docs = new Payment(...values);
        template.render<Payment>(docs as Payment, type.value, "end")

    }
})
