import 'reflect-metadata'

// const plane = {
//     color: "red"
// };

// // Reflect.defineMetadata('note', 'hi there', plane);
// // const note = Reflect.getMetadata('note', plane);
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');


// console.log(note);
@controller
class Plane {

    color: string = "red";
    @get('hiiii')
    public fly(): void {
        console.log('vrrrrrrr');
    }

}


function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target: typeof Plane) {
    for (const key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key)
        const middleware = Reflect.getMetadata('middleware', target.prototype);
        router.get(path, middleware, target.prototype[key]);
    }
}
// const note = Reflect.getMetadata('note', Plane.prototype, 'fly');

// console.log(note);