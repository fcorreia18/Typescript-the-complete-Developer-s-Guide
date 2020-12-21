class Vehicle {
    //Podemos fazer assim
    // color: string;
    // constructor(color: string) {
    //     this.setColor(color);
    // }
    //Ou
    //Podemos fazer assim
    //Nota: os modificadores de argumentos podem ser usados apenas dentro do metodo construtor
    constructor(public color: string) {//Maneira encurtada de fazer, o modificador public torna o argumento da função num atributo disponível por toda classe, filhos e fora da classe.
        this.setColor(color);
    }
    drive(): void {
        console.log("something");
    }
    protected anotherMethod(): void {
        console.log("another method");
    }

    setColor(color: string): void {
        this.color = color;
    }
    getColor(): string {
        return this.color;
    }
}

class Car extends Vehicle {
    //Nota: aqui não colocamos o modificador no argumento color porque é um atributo pertencente a classe pai, e não queremos reescrevê-lo, apenas utilizá-lo devido o método super, já o model(modelo do veiculo no caso) é um atributo pertencente a classe Car, por isso usamos o modificador public.
    constructor(color: string, public model: number) {
        super(color);
        this.model = model;
    }
    drive(): void {
        console.log("Overriting the method");
        this.anotherMethod();
    }
}

const newCar = new Car('Blue', 222);
console.log(newCar.getColor());