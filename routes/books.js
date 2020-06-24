import { Router } from 'express';
import books from '../controller/books';
import { validationBook, validateImage } from '../utils/validations/books';

const router = Router();

router.get('/', books.getAll);
router.get('/:id', books.get);
router.get('/:language', books.getByTitle);
router.post('/image', validateImage, books.appendImage);
router.post('/', validationBook, books.create);
router.post('/:id', validationBook, books.update);

export default router;
