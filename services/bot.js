import axios from 'axios';

require('dotenv').config();

const token = process.env.BOT_TOKEN;

const sendMessage = ({ userId, text }) => (
  axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(text)}`)
)

export { sendMessage as default };
