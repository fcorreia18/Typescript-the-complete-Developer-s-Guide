import { NextFunction, Request, Response } from "express";
import { get, controller, use } from "./decorators";

function testing(req: Request, res: Response, next: NextFunction) {
    console.log('testei')
    next();
    return;
}

@controller('/auth')
export class LoginController {
    @get('/login')
    @use(testing)
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="Post">
                <div>
                    <label>Email:</label>
                    <input name="email" value="francisco@gmail.com"/>
                </div> 
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value="1234"/>
                </div> 
                <button type="submit">Submit</button>
            </form>
        
        `);
    }
}
