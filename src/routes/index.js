import { Router } from 'express';
import webhooks from './webhooks';
import orders from './orders';

const index = Router();
index.use('/webhooks', webhooks);
index.use('/orders', orders);

export default index;
