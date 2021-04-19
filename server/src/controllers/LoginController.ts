import { NextFunction, Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators";



@controller('/auth')
export class LoginController {

    @get('/login')
    public getLogin(req: Request, res: Response): void {
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


    @post('/login')
    @bodyValidator('email', 'password')
    public postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email === "francisco@gmail.com" && password === "1234") {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send("Email and Password may be invalid");

        }
    }

    @get('/logout')
    public getLogout(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            req.session.loggedIn = false;//Or how is usually done should be: req.session = undefined;
            res.redirect("/");
        } else {

        }
    }
}
