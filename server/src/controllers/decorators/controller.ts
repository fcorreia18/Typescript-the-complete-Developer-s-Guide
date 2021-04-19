import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, Request, RequestHandler, Response } from 'express';

function bodyValidatorMiddleware(keys: string): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send("Invalid Request");
            return;
        }

        for (const key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Invalid Request, missing property ${key}`);
                return;
            }
        }
        next();
    }
}

export function controller(routePrefixer: string) {
    return function (target: Function) {

        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requestBody = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];
            const validators = bodyValidatorMiddleware(requestBody);
            if (path) {
                router[method](`${routePrefixer}${path}`, ...middlewares, validators, routeHandler);
            }
        }
    }
}