import faker from 'faker';

export class User {
    name: string;
    location: {
        x: number,
        y: number
    }
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            x: parseFloat(faker.address.latitude()),
            y: parseFloat(faker.address.longitude()),
        }
    }
}