import { Router } from 'express';
import course from '../controller/course';
import validationCourse, { create, update } from '../utils/validations/courses';

const router = Router();

router.get('/', course.getAll);
router.get('/:id', course.get);
router.post('/', create, validationCourse, course.create);
router.post('/:id', update, validationCourse, course.update);

export default router;
