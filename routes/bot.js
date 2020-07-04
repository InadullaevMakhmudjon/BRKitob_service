import { Router } from 'express';
import bot from '../controller/bot'
import validation from '../utils/validations/bot'

const router = Router();

router.post('/sendMessage', validation, bot.sendMessage);

export default router;
