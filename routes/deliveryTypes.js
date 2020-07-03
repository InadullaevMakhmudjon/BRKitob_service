import { Router } from 'express';
import deliveryType from '../controller/deliveryType';

const router = Router();

router.get('/', deliveryType.getAll);
router.post('/:id', deliveryType.update);

export default router;
