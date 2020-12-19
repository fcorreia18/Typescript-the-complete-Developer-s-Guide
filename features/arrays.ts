const carsMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date, new Date];

const carsByMakers = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Help with inference when extracting values
const car = carsMakers[0];
const myCar = carsMakers.pop();

//prevent incompatible values
carsMakers.push('ola');

//Help with iterations functions

carsMakers.map((car: string): string => {
    return car;
})