import { Router } from 'express';
import userCourse from '../controller/userCourse';
import validation from '../utils/validations/userCourse';

const router = Router();

router.post('/', validation, userCourse.create);
router.post('/:chargerId', validation, userCourse.create);


export default router;
