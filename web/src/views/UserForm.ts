export class UserFrom {
    constructor(public parent: Element) { }

    public eventsMap(): { [key: string]: () => void } {
        return {
            "click:button": this.onButtonClick
        }
    }
    public onButtonClick(): void {
        return console.log('clicou');
    }
    public template(): string {
        return `
        <div>
        <h1> User Form</h1>
        <input/> 
        <button>click Me</button>
        </div>
        `;
    }

    public bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (const eventkey in eventsMap) {
            const [eventName, selector] = eventkey.split(":");


            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventkey]);
            })
        }
    }

    public render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();


        this.parent.append(templateElement.content);
    }
}