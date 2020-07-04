import sendMessage from '../services/bot';

export default {
  sendMessage(req, res) {
    sendMessage(req.body)
      .then(() => res.sendStatus(201))
      .catch((error) => res.status(502).json(error));
  },
};
