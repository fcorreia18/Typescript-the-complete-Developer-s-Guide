class Vehicle {
    color: string;
    constructor(color: string) {
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
    constructor(color: string) {
        super(color);
    }
    drive(): void {
        console.log("Overriting the method");
        this.anotherMethod();
    }
}

const newCar = new Car('Blue');
console.log(newCar.getColor());