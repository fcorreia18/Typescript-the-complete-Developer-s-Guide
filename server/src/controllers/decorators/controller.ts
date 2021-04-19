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

        if (!req.body.filter((key: string) => key.includes(keys))) {
            res.status(422).send("Invalid Request");
            return;
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
            const validators = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key);
            if (path) {
                router[method](`${routePrefixer}${path}`, ...middlewares, routeHandler);
            }
        }
    }
}