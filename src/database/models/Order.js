import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const Orders = new Schema({
  idOrder: { type: String, required: true, unique: true },
  customer: {
    name: { type: String, required: true },
  },
  item: {
    code: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    currency: { type: String, required: true },
    unitValue: { type: Number, required: true },
  },
  totalValue: { type: Number, default: 0 },
});

Orders.set('timestamps', true);

export default model('Orders', Orders);
