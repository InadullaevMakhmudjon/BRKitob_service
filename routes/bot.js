import { Router } from 'express';
import sendMessage from '../services/bot';

const router = Router();

router.post('/sendMessage', (req, res) => {
  sendMessage(req.body.userId, req.body.text)
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(400).json(error));
});

export default router;
