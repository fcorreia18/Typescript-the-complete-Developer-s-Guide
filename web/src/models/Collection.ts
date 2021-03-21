import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./User"
import { Eventing } from "./Eventing";


export class Collection {
    models: User[] = [];
    eventing: Eventing = new Eventing();

    constructor(public rootUrl: string) { }
    get on() {
        return this.eventing.on;
    }
    get trigger() {
        return this.eventing.trigger;
    }

    public fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: UserProps) => {
                    const user = User.buildUser(value);
                    this.models.push(user);
                });
                this.eventing.trigger('change');
            })
    }
}