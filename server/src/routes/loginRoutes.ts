import express, { Router, Request, Response } from 'express'
interface RequestCorrectBody extends Request {
    body: { [key: string]: string | undefined }
}
const router = Router();

router.get('/', (req: Request, res: Response): void => { res.send('hi there') })
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

router.post('/login', (req: RequestCorrectBody, res: Response) => {
    const { email, password } = req.body;
    if (email) {
        res.send(email)
    } else {
        throw new Error("Email and Password may be invalid");

    }
})
export { router };