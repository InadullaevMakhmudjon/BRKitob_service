import axios from 'axios';

const URL = process.env.BOT_SERVICE;

export default () => { axios.post(URL); };
