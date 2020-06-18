import { Router } from 'express';
import getOrders from '../controllers/orders';

const orders = Router();
orders.route('/').get(getOrders);

export default orders;
