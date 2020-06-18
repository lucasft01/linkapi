import Orders from '../database/models/Order';

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    return res.status(200).json({ orders });
  } catch (e) {
    return res.sendStatus(500);
  }
};

export default getOrders;
