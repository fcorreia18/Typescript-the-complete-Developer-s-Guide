interface Vehicle {
    name: string,
    year: number | Date,
    isBroken: boolean,
    carDescription(): void
}
const oldCivic = {
    novoDado: 2,//Não tem problema nenhum que esse objecto tenha propriedades a mais em relação a interface, desde que ele satisfaça a estrutura e os dados da interface está tudo bem.
    name: 'civic',
    year: new Date,
    isBroken: true,
    carDescription(): void {
        console.log('this is the car description');
    }
}

const printVehicle = ({ name, year, isBroken }: Vehicle): void => {
    console.log(`name is: ${name}`);
    console.log(`was created at: ${year}`);
    console.log(`it is broken? ${isBroken}`);
}
printVehicle(oldCivic);