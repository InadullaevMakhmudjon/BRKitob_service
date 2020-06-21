import { Router } from 'express';
import gifts from '../controller/gifts';
import validation from '../utils/validations/gifts';

const router = Router();

router.get('/', gifts.getAll);
router.get('/:language', gifts.getByTitle);
router.post('/', validation, gifts.create);

export default router;
