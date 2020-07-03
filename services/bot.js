import axios from 'axios';

require('dotenv').config();

const token = process.env.BOT_TOKEN;

const sendMessage = (userId, text) => new Promise((resolve, reject) => {
  axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(text)}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { sendMessage as default };
