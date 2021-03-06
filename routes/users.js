import { Router } from 'express';
import users from '../controller/users';
import validate from '../utils/validations/user';

const router = Router();

router.get('/', users.getAll);
router.get('/:id', users.get);
router.post('/', validate, users.create);
router.post('/:id/getGift', users.getGift);
router.post('/:id/updatePoint', users.updatePoint);
router.delete('/:id', users.delete);

export default router;
