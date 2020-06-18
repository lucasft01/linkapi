import { config } from 'dotenv';

import app from './app';

config();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const address = `${host}:${port}`;

app.listen(port, host, () => console.log(`API running in ${address}`));
