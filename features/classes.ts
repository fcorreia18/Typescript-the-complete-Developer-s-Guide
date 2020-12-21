class Vehicle {
    drive(): void {
        console.log("something");
    }
    protected anotherMethod(): void {
        console.log("another method");
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("Overriting the method");
        this.anotherMethod();
    }
}
