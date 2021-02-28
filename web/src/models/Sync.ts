import axios, { AxiosResponse, AxiosPromise } from 'axios'
import { UserProps } from "./User";

export class Sync {

    public fetch(id: number): AxiosPromise {
        return axios.get(`http://localhost:3000/users/${id}`);
    }

    public fetchAll(): AxiosPromise {
        return axios.get('http://localhost:3000/users');
    }

    public save(data: UserProps): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`http://localhost:3000/users/${id}`, data);
        }
        return axios.post('http://localhost:3000/users/', data);
    }
}