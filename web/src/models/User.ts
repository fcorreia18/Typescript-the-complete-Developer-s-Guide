import { Eventing } from './Eventing';
import { Attributes } from "./Attributes";
import { Sync } from "./Sync";
export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}
const rootUrl = "http://localhost:3000/users";

export class User {

    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;

    constructor(attr: UserProps) {
        this.attributes = new Attributes<UserProps>(attr);
    };

    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }
    set(update: UserProps): void {
        this.events.trigger('change');
        return this.attributes.set(update);
    }
}