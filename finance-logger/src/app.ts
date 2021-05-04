class Invoice {
    constructor(readonly client: string, private details: string, public amount: number) { }
    /**
     * format
     */
    public format(): string {
        return `${this.client} owes ${this.amount}kz for ${this.details}`
    }
}
const invOne = new Invoice("Francisco Correia", "Work form website", 600000);
const invoices: Invoice[] = [];
invoices.push(invOne);
console.log(invOne, invoices)
type INPUT = HTMLInputElement;
const anchor: HTMLAnchorElement = document.querySelector('a')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as INPUT;
const details = document.querySelector('#details') as INPUT;
const amount = document.querySelector('#amount') as INPUT;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    return console.log(` ${type.value}, ${tofrom.value}, ${details.value}, ${amount.value}`);
})
