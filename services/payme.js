import axios from 'axios';

const token = process.env.PAYME_TOKEN;

const API = axios.create({
  headers: { 'X-Auth': token },
  baseURL: process.env.PAYME_URL,
});

export default {
  get: (id) => API.post('/api', {
    method: 'receipts.get',
    params: {
      id,
    },
  }).then(({ data }) => data),
  send: (id, phone) => API.post('/api', {
    method: 'receipts.send',
    params: {
      id,
      phone,
    },
  }),
  create: (amount) => API.post('/api', {
    method: 'receipts.create',
    params: {
      account: {
        charge_id: process.env.CHARGE_ID,
      },
      amount: amount * 100,
      description: '',
      merchant_id: token.split(':')[0],
    },
  }).then(({ data }) => data),
  check: (id) => API.post('/api', {
    method: 'receipts.check',
    params: {
      id,
    },
  }).then(({ data }) => data),
};
