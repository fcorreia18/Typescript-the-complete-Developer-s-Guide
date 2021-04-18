import 'reflect-metadata';
import { Methods } from "./Methods";
function routeBinder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}


export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.del);