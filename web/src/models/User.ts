import { Eventing } from './Eventing';

export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}


export class User {

    allUsers: UserProps[] = []
    public events: Eventing = new Eventing();
    constructor(private data: UserProps) { }

    public get(atribute: string): string | number {
        return this.data[atribute];
    }

    public set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}