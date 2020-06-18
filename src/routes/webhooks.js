import { Router } from 'express';
import dealWebHook from '../controllers/webhooks';

const webhook = Router();
webhook.route('/deal').post(dealWebHook);

export default webhook;
