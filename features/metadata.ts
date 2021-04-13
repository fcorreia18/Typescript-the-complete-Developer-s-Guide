import 'reflect-metadata'

// const plane = {
//     color: "red"
// };

// // Reflect.defineMetadata('note', 'hi there', plane);
// // const note = Reflect.getMetadata('note', plane);
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');


// console.log(note);
@printMetadata
class Plane {

    color: string = "red";
    @markFunction('hiiii')
    public fly(): void {
        console.log('vrrrrrrr');
    }

}


function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}

function printMetadata(target: typeof Plane) {
    for (const key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key)
        console.log(secret);
    }
}
// const note = Reflect.getMetadata('note', Plane.prototype, 'fly');

// console.log(note);