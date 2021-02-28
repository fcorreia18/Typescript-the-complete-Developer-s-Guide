import axios, { AxiosResponse, AxiosPromise } from 'axios'
import { UserProps } from "./User";

interface HasId {
    id?: number;
}

export class Sync<T extends HasId> {
     allUsers: UserProps[] = []
    constructor(public rootUrl: string) { }

    public fetch(id: number): AxiosPromise {
        return axios.get(`/${id}`);
    }

    public fetchAll(): AxiosPromise {
        return axios.get(this.rootUrl);
    }

    public save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        }
        return axios.post(this.rootUrl, data);
    }
}