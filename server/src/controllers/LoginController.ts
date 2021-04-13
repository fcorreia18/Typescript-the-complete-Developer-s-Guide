import { Request, Response } from "express";

@controller('/')
export class LoginController {
    @get('/login')
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