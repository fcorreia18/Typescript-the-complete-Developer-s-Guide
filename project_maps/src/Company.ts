import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        x: number,
        y: number
    }


    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            x: parseFloat(faker.address.latitude()),
            y: parseFloat(faker.address.longitude())
        }
    }
}