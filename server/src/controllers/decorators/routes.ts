import 'reflect-metadata';
import { LoginController } from "../LoginController";

export function get(path: string) {
    return function (target: LoginController, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('key', target, key);
    }
}