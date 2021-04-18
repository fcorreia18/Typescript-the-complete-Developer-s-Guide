import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export let variavel: string;
export let outra: string;
export function controller(routePrefixer: string) {
    return function (target: Function) {

        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            variavel = path;
            outra = routeHandler;
            if (path) {
                router.get(`${routePrefixer}${path}`, routeHandler);
            }
        }
    }
}