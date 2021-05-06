import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

type INPUT = HTMLInputElement;
const anchor: HTMLAnchorElement = document.querySelector('a')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as INPUT;
const details = document.querySelector('#details') as INPUT;
const amount = document.querySelector('#amount') as INPUT;

const form = document.querySelector('.new-item-form') as HTMLFormElement;



form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let docs: HasFormatter;
    if (type.value == "invoice") {
        docs = new Invoice(tofrom.value, details.value, parseInt(amount.value));
    } else {
        docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    return console.log(docs);
})
