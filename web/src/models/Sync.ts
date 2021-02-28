import axios, { AxiosResponse, AxiosPromise } from 'axios'
import { UserProps } from "./User";

interface HasId {
    id: number;
}

export class Sync<T extends HasId> {

    public fetch(id: number): AxiosPromise {
        return axios.get(`http://localhost:3000/users/${id}`);
    }

    public fetchAll(): AxiosPromise {
        return axios.get('http://localhost:3000/users');
    }

    public save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`http://localhost:3000/users/${id}`, data);
        }
        return axios.post('http://localhost:3000/users/', data);
    }
}