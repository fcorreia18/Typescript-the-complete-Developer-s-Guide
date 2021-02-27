import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing';

interface UserProps {
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

    public async fetch(id: number): Promise<void | null> {

        const result = await axios.get(`http://localhost:3000/users/${id}`);
        if (result.status === 200) {
            return this.set(result.data);
        }
        return null;
    }

    public async fetchAll(): Promise<void> {

        const allUsers = (await axios.get('http://localhost:3000/users')).data;
        return Object.assign(this.allUsers, allUsers);

    }
    public save() {
        const id = this.get('id')
        if (id) {
            return axios.put(`http://localhost:3000/users/${id}`, this.data);
        }
        axios.post('http://localhost:3000/users/', this.data);
    }
}