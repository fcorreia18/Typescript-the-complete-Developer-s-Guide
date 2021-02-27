

// type Callback = () => {};Aqui estamos dizendo que esse type alias é uma função que vai retornar um objecto.
// type Callback = () => string; E aqui estamos a dizer que vai retornar uma string
// type Callback = () => UserProps; Aqui estamos a dizer que vai retornar um objecto do tipo UserProps
type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {};

    public on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || []
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    public trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => callback())
    }
}