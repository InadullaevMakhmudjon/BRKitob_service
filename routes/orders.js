import { Router } from 'express';
import orders from '../controller/orders';

const router = Router();

router.get('/', orders.getAll);
router.get('/:id', orders.get);

export default router;
