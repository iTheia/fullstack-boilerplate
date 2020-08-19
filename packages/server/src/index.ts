import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { connection } from './database';
import { router } from './router';

const app = express();
const server = createServer(app);

connection();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/api/v1/', router);

server.listen(5000);
