import express, { Router, Request, Response, NextFunction } from 'express';

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

const router = Router();

router.get('/', (req: Request, res: Response): void => {

    if (req.session) {
        if (req.session.loggedIn) {
            res.send(`
            You´re Logged In 
            <br/>
                    <div>
                    <a  href="/logout">Logout</a>
                    </div>
                    `);
        } else {

            res.send(`
                You´re not Logged In 
                <br/>
                <div>
                <a href="/login">Login</a>
                </div>
                `);
        }
    }

})

router.get('/login', (req: Request, res: Response): void => {

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
})

router.post('/login', (req: RequestWithCorrectBody, res: Response) => {
    const { email, password } = req.body;
    if (email && password && email === "francisco@gmail.com" && password === "1234") {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send("Email and Password may be invalid");

    }
})

router.get('/logout', (req: RequestWithCorrectBody, res: Response) => {
    if (req.session && req.session.loggedIn) {
        req.session.loggedIn = false;//Or how is usually done should be: req.session = undefined;
        res.redirect("/");
    } else {

    }
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.status(200).send("Welcome you´re logged in")
});
export { router };