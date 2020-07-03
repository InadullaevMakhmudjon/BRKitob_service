import { Router } from 'express';
import orders from '../controller/orders';
import validation from '../utils/validations/orders';

const router = Router();

router.get('/', orders.getAll);
router.get('/:id', orders.get);
router.post('/', validation, orders.create);
router.post('/:chargerId', validation, orders.create);
router.post('/:id/waiting', orders.waiting);
router.post('/:id/done', orders.done);

export default router;
