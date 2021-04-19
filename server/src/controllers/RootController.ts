import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorators";


type Middleware = (req: Request, res: Response, next: NextFunction) => void;

interface RequestWithCorrectBody extends Request {
    body: { [key: string]: string | undefined }
}

const requireAuth: Middleware = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not permitted");
}


@controller('')
export class RootController {
    @get('/')
    getRoot(req: Request, res: Response): void {

        if (req.session) {
            if (req.session.loggedIn) {
                res.send(`
                You´re Logged In 
                <br/>
                        <div>
                        <a  href="/auth/logout">Logout</a>
                        </div>
                        `);
            } else {

                res.send(`
                    You´re not Logged In 
                    <br/>
                    <div>
                    <a href="/auth/login">Login</a>
                    </div>
                    `);
            }
        }

    }





    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.status(200).send("Welcome you´re logged in")
    }
}