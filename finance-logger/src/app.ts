type INPUT = HTMLInputElement;
const anchor: HTMLAnchorElement = document.querySelector('a')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as INPUT;
const details = document.querySelector('#details') as INPUT;
const amount = document.querySelector('#amount') as INPUT;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    return console.log(`${anchor.text}, ${type.value}, ${tofrom.value}, ${details.value}, ${amount.value}`);
})
