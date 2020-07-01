import axios from 'axios';

const token = process.env.PAYME_TOKEN;

const API = axios.create({
  headers: { 'X-Auth': token },
  baseURL: process.env.PAYME_URL,
});

const send = (id, phone) => API.post('/api', {
  method: 'receipts.send',
  params: {
    id,
    phone,
  },
});

const sendMessage = async (data, phone) => {
  // eslint-disable-next-line no-underscore-dangle
  await send(data.result.receipt._id, phone);
  return data;
};

export default {
  create: (amount, phone) => API.post('/api', {
    method: 'receipts.create',
    params: {
      account: {
        charge_id: process.env.CHARGE_ID,
      },
      amount: amount * 100,
      description: '',
      merchant_id: token.split(':')[0],
    },
  }).then(({ data }) => sendMessage(data, phone)),
  check: (id) => API.post('/api', {
    method: 'receipts.check',
    params: {
      id,
    },
  }).then(({ data }) => data),
};
