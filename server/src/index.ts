import express, { Express, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import axios from 'axios';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import userCache from './util/userCache';
import initUserCache from './util/initUserCache';
import registerRoutes from './routes';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
registerRoutes(app);

axios.get('https://reqres.in/api/users?page=1').then(async (response: any) => {
    await initUserCache(response.data.data);

    app.get('/', (req: Request, res: Response) => {
        res.send(userCache);
    });

    app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
}).catch((error) => {
    console.log(error);

    app.get('/', (req: Request, res: Response) => {
        res.send({});
    });
});
