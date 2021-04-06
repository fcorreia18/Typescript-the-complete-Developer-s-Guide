class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return ` This boat color is ${this.color}`;
    }
    @logError("Oooops, boat was sunk with a new method")
    public pilot(): void {
        throw new Error();
        console.log('swish');
    }
}

function logError(message: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function (): void {
            try {
                method();
            } catch (e) {
                return console.log(message);
            }
        }
    }
}


function testDecorator(target: any, key: string): void {

}