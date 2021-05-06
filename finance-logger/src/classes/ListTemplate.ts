/**
 * 1. register a list container (ul) in the constructor
 * 2.create a render method to render  a new li
 *  -- accepts arguments:invoice or payment, a heading a position
 *  -- create a html template(li, h4, p)
 *  -- add the 'li' template to the end/start of the list
 */

import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    /**
     * render
     */
    public render(type: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');
        const header = document.createElement('h4')
        header.innerHTML = heading;
        li.append(header)
        const p = document.createElement('p');
        p.innerHTML = type.format();
        li.append(p)
        if (pos === "start") {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}