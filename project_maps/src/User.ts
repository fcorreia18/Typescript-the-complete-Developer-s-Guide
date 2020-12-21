import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
    markerContent(): string {
        return `This is the info about the user: </br> first name: ${this.name}`;
    }
}