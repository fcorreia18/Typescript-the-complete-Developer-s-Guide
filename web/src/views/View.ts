import { User } from "../models/User";

export abstract class View {
    constructor(public parent: Element, public model: User) { this.bindModel(); }

    public bindModel(): void {
        this.model.on('change', () => {
            this.render();
        })
    }

    public abstract eventsMap(): { [key: string]: () => void };
    public abstract template(): string;

    public bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        //eventKey is click:button, in other words eventKey is the key of eventsMap
        for (const eventkey in eventsMap) {
            //here we are destructuring or separating the string click:button, to eventName that will be the click and selector that will be the button, this button is were we want to attach the event handler to.
            const [eventName, selector] = eventkey.split(":");

            //the render element under us as a property templateElement.content, this property is DocumentFragment type, that means that is a peace of html that can be pushed or put to the DOM, so at this function that we are now, we are receiving a fragament parameter to the function (that will be fullfiled with the templateElement.content form the render function).

            //The line under us means that we are looking for each selector(in our case the button, but could be a h1 ou a span),and we ar looping to each element and adding a event listener, this envent listener has the name that we old e the variable eventName, and because we are also looping into enventsMap with a for loop, and searching the eventKey, the callback function for this eventListener will be the value form the eventsMap at the eventKey 
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventkey]);
            })
        }
    }

    public render(): void {

        //this line of code cleans up the parent html and re-render the page in case we update some data
        this.parent.innerHTML = '';

        //the under line is creating a element in the document, this element is of the type HTMLTemplateElement
        const templateElement = document.createElement('template');

        //here we are adding the string inside this.template function into the templateElement using the innerHTML property
        templateElement.innerHTML = this.template();

        //the bindEvent function gets a htmlfragment search for a selector and bind or associate a event handler on it.(more detailed explanation in the bindEvents above)
        this.bindEvents(templateElement.content)

        //the parent attribute is of the type Element, that means we can append some html fragments to the DOM from im. In our case we're adding the content of our html fragment that is the templateElement.content.
        this.parent.append(templateElement.content);
    }
}