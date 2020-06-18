import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import express from 'express';
import './src/database/config';

import routes from './src/routes';

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api/v1', routes);

export default app;
