import faker from 'faker';
import { Mappable } from "./CustomMap";

export class Company {
    companyName: string;
    catchPhrase: string;
    color: string = 'blue';
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string {
        return `This is the info about the user: <br/> first name: ${this.companyName} <br/> companyInfo: ${this.catchPhrase}`;
    }


    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}