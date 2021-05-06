/**
 * 1. register a list container (ul) in the constructor
 * 2.create a render method to render  a new li
 *  -- accepts arguments:invoice or payment, a heading a position
 *  -- create a html template(li, h4, p)
 *  -- add the 'li' template to the end/start of the list
 */
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    /**
     * render
     */
    render(type, heading, pos) {
        const li = document.createElement('li');
        const header = document.createElement('h4');
        header.innerHTML = heading;
        li.append(header);
        const p = document.createElement('p');
        p.innerHTML = type.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
