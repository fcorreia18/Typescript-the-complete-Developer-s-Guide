import express, { Router, Request, Response } from 'express'
interface RequestWithCorrectBody extends Request {
    body: { [key: string]: string | undefined }
}
const router = Router();

router.get('/', (req: Request, res: Response): void => {
    if (req.session && req.session.loggedIn) {
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
})
router.post('/logout', (req: RequestWithCorrectBody, res: Response) => {
    if (req.session && req.session.loggedIn === true) {
        req.session.loggedIn = false;
        res.redirect("/");
    } else {

    }
})
router.get('/login', (req: Request, res: Response): void => {
    res.send(`
     
    <form method="Post">
        <div>
            <label>Email:</label>
            <input name="email"/>
        </div> 
        <div>
            <label>Password:</label>
            <input type="password" name="password"/>
        </div> 
        <button type="submit">Submit</button>
    </form>
`);
})

router.post('/login', (req: RequestWithCorrectBody, res: Response) => {
    const { email, password } = req.body;
    if (email && password && email === "francisco@gmail.com" && password === "1234") {
        req.session = { loggedIn: true };
        res.redirect('/', 200);
    } else {
        res.send("Email and Password may be invalid");

    }
})
export { router };