import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefixer: string) {
    return function (target: Function) {

        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

            if (path) {
                router[method](`${routePrefixer}${path}`, routeHandler);
            }
        }
    }
}