import express, { urlencoded } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session'
import { AppRouter } from "./AppRouter";
import './controllers/LoginController';
import './controllers/RootController';


const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["saljdglo"] }));
app.use(router);
app.use(AppRouter.getInstance());


app.listen(3000, () => {
    console.log("app is running on port 3000")
});