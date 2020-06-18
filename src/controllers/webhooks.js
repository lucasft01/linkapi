import { post } from 'axios';
import Orders from '../database/models/Order';
import generateOrderXML from '../helpers/xml';

const blingUrl = process.env.BLING_URL;
const apiKey = process.env.API_KEY_BLING;

const dealWebHook = async (req, res) => {
  try {
    const { body } = req;
    const {
      current: {
        title: description, value: unitValue, currency, status: statusDeal, person_name: personName,
      },
    } = body;
    if (statusDeal === 'won') {
      const quantity = 1;
      const code = new Date().getTime();
      const customer = { name: personName };
      const item = {
        code,
        description,
        unitValue,
        quantity,
      };
      const order = {
        ...customer,
        ...item,
      };
      const totalValue = unitValue * quantity;
      const collectionOrder = new Orders({
        customer,
        item: { ...item, currency },
        totalValue,
      });
      const orderXML = generateOrderXML(order);
      const { data: { retorno: dataReturn } } = await post(`${blingUrl}/pedido/json/&apikey=${apiKey}?xml=${orderXML}`);
      const { pedidos: orders, erros: errors } = dataReturn;
      if (errors) return res.status(500).send(errors);
      const { pedido: currentOrder } = orders[0];
      const { idPedido: idOrder } = currentOrder;
      collectionOrder.idOrder = idOrder;
      collectionOrder.save();
    }
    return res.status(200).send('Success');
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default dealWebHook;
