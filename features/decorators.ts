@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return ` This boat color is ${this.color}`;
    }
    @logError("Oooops, boat was sunk with a new method")
    public pilot(@parameterDecorator speed: string, @parameterDecorator anotherparameter: string): void {
        if (speed === 'fast') {
            console.log("boat is fast")
        }
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

function parameterDecorator(target: any, key: string, index: number): void {
    console.log(key);
    console.log(index);
}

//o tipo do parametro aqui pode ser uma função ou do tipo de classe que no caso é Boat fazendo referência ao seu construtor e ficaria da seguinte forma: constructor: typeof Boat
function classDecorator(constructor: Function): void {
    console.log(constructor)
}