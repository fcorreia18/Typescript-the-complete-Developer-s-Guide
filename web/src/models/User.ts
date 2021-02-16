interface UserProps {
    age: number;
    name: string;
}

export class User {
    constructor(private data: UserProps) { }
    get(name: string): number | string {
        return this.data[name];
    }
}