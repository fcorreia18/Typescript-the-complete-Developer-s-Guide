interface Vehicle {
    name: string,
    year: number,
    isBroken: boolean
}
const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: true
}

const printVehicle = ({ name, year, isBroken }: Vehicle): void => {
    console.log(`name is: ${name}`);
    console.log(`was created at: ${year}`);
    console.log(`it is broken? ${isBroken}`);
}
printVehicle(oldCivic);