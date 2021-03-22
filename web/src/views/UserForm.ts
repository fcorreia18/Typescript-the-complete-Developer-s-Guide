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

        //eventKey is click:button, in other words eventKey is the key of eventsMap
        for (const eventkey in eventsMap) {
            //here we are destructuring or separating the string click:button, to eventName that will be the click and selector that will be the button
            const [eventName, selector] = eventkey.split(":");

            //the render element under us as a property templateElement.content, this property is DocumentFragment type, that means that is a peace of html that can be pushed or put to the DOM, so at this function that we are now, we are receiving a fragament parameter to the function (that will be fullfiled with the templateElement.content form the render function).

            //The line under us means that we are looking for each selector(in our case the button, but could be a h1 ou a span),and we ar looping to each element and adding a event listener, this envent listener has the name that we old e the variable eventName, and because we are also looping into enventsMap with a for loop, and searching the eventKey, the callback function for this eventListener will be the value form the eventsMap at the eventKey 
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventkey]);
            })
        }
    }

    public render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content);
    }
}