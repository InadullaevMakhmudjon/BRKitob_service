import { Router } from 'express';
import deliveryType from '../controller/deliveryType';
import validation from '../utils/validations/delivery';

const router = Router();

router.get('/', deliveryType.getAll);
router.post('/:id', validation, deliveryType.update);

export default router;
