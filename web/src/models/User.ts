import { Eventing } from './Eventing';
import { Sync } from "./Sync";
export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}
const rootUrl = "http://localhost:3000/users";

export class User {

    allUsers: UserProps[] = []
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(private data: UserProps) { }

    public get(atribute: string): string | number {
        return this.data[atribute];
    }

    public set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}