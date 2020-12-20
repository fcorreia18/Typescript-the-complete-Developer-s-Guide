const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: true
}

const printVehicle = (vehicle: { name: string; year: number; isBroken: boolean }): void => {
    console.log(`name is: ${vehicle.name}`);
    console.log(`was created at: ${vehicle.year}`);
    console.log(`it is broken? ${vehicle.isBroken}`);
}
printVehicle(oldCivic);