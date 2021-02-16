class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    public get(index: number): number {
        return this.collection[index]
    }
}

const numero = new ArrayOfNumbers([2, 0, 3, 8]);

console.log(numero.get(0));

class ArrayOfStrings {
    constructor(public collection: string[]) { }

    public get(index: string | number): string {
        return this.collection[index];
    }
}
const letras = new ArrayOfStrings(["a", "f", "g"]);

console.log(letras.get(1));


class ArrayOfAnything<T>{

    constructor(public collection: T[]) { }

    public get(index: number): T {
        return this.collection[index];
    }
}

const qc = new ArrayOfAnything([9, 0, 6, 'p']);

console.log(qc.get(1));




function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


const printNumber = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const printAnything = <T>(arr: T[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


function printAnything2<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


printString(["l", "k"]);
printNumber([34, 89, 12]);
printAnything<string>(['34, 89, 12', 's']);
printAnything2<number>([2, 98]);










