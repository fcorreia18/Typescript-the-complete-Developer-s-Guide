import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}
interface Events {

    on(eventName: string, callback: () => void): void;
    trigger(EventeName: string): void;
}

interface hasId {
    id?: number
}

export class Model<T extends hasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    // get on() {
    //     return this.events.on;
    // }
    // get trigger() {
    //     return this.events.trigger;
    // }
    // get get() {
    //     return this.attributes.get;
    // }
    //A short way to passthroug methods, note: te constructor function, must not have a implementation or code inside her body, otherwise this wont work. And it will not work when we have inline instantiation eg: const events = new Envent; the line under this will run first. Javascript will put on =  this.events.on before events = new Event.
    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    public fetch(): void {
        const id = this.get('id');

        if (typeof id !== "number") {
            throw new Error("Cannot fetch without an id");
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => this.set(response.data))
    }

    public save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => this.trigger('save'))
            .catch(() => this.trigger('error'))
    }
}